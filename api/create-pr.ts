// /api/create-pr.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Octokit } from "@octokit/rest";

const {
  GITHUB_TOKEN,         // repo-scoped
  GITHUB_OWNER,         // z.B. "quantiva-advisory"
  GITHUB_REPO,          // z.B. "website"
  GITHUB_BASE_BRANCH,   // z.B. "main"
} = process.env;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
    if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO || !GITHUB_BASE_BRANCH) {
      return res.status(500).json({ error: "Missing GitHub env vars" });
    }

    const {
      filePath = "src/data/cases.json",
      content,                    // stringified JSON
      branchPrefix = "cases-update",
      title = "Update: cases.json",
      description = "",
      authorName = "Quantiva Admin",
      authorEmail = "bot@quantivaadvisory.com",
    } = req.body || {};

    if (typeof content !== "string" || !content.trim()) {
      return res.status(400).json({ error: "content (string) required" });
    }

    const octokit = new Octokit({ auth: GITHUB_TOKEN });

    // 1) Base REF (SHA)
    const { data: baseRef } = await octokit.git.getRef({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      ref: `heads/${GITHUB_BASE_BRANCH}`,
    });

    const baseSha = baseRef.object.sha;

    // 2) New branch
    const branchName = `${branchPrefix}-${Date.now()}`;
    await octokit.git.createRef({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      ref: `refs/heads/${branchName}`,
      sha: baseSha,
    });

    // 3) Commit file (createOrUpdateFileContents takes care of blob/tree/commit)
    const encoded = Buffer.from(content, "utf8").toString("base64");
    await octokit.repos.createOrUpdateFileContents({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      path: filePath,
      message: `chore(cases): update ${filePath}`,
      content: encoded,
      branch: branchName,
      committer: { name: authorName, email: authorEmail },
      author: { name: authorName, email: authorEmail },
    });

    // 4) Create PR
    const { data: pr } = await octokit.pulls.create({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      title,
      head: branchName,
      base: GITHUB_BASE_BRANCH,
      body: description || "Automated update from Quantiva Admin Dashboard",
      maintainer_can_modify: true,
    });

    return res.status(200).json({ ok: true, prNumber: pr.number, prUrl: pr.html_url, branch: branchName });
  } catch (err: any) {
    console.error("create-pr error:", err?.message || err);
    return res.status(500).json({ error: err?.message || "Internal error" });
  }
}
