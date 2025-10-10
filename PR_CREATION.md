# PR Creation Feature - Quantiva Admin Dashboard

> ⚠️ **DEPRECATED**: The serverless API function `/api/create-pr.ts` has been removed from the codebase.  
> The current workflow uses **direct file editing** via the Admin Dashboard with manual Git commits.  
> See [Current Workflow](#current-workflow) below for the updated process.

---

## ⚠️ **Legacy Implementation (DEPRECATED)**

The following documentation describes the **original serverless API approach**, which has been **removed** due to:
- Vercel Edge Function compatibility issues
- Missing dependencies in production builds
- Simplified workflow via direct file editing

### 🎯 **What Was Implemented (Legacy):**

1. **Serverless API Function** (`/api/create-pr.ts`) - **REMOVED**:
   - ❌ ~~Vercel-compatible serverless function~~
   - ❌ ~~GitHub integration via Octokit~~
   - ❌ ~~Secure token handling (server-side only)~~
   - ❌ ~~Branch creation with unique timestamps~~
   - ❌ ~~File commit with proper author information~~
   - ❌ ~~Pull Request creation with descriptive titles~~

2. **Admin Dashboard Integration**:
   - ✅ **PR Creation Button** in toolbar
   - ✅ **Loading states** with user feedback
   - ✅ **Success handling** with PR link display
   - ✅ **Error handling** with clear messages
   - ✅ **Pipeline format** export for consistency

3. **Security & Best Practices**:
   - ✅ **Environment variables** for sensitive data
   - ✅ **Server-side token** (never exposed to client)
   - ✅ **Input validation** and error handling
   - ✅ **Proper HTTP methods** and status codes

### 🔧 **Technical Implementation**

#### **A) Serverless API Function**
```typescript
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
  // Implementation details...
}
```

#### **B) Admin Dashboard Integration**
```typescript
// Helper to minimize cases for pipeline format
function toPipelineCases(items: any[]) {
  return items.map(({ 
    slug, titleDe, titleEn, subtitleDe, subtitleEn, category, industry,
    heroImage, heroMedia, goalsDe, goalsEn, solutionDe, solutionEn,
    resultsDe, resultsEn, tech, quote
  }: any) => ({
    slug, titleDe, titleEn, subtitleDe, subtitleEn, category, industry,
    heroImage, heroMedia, goalsDe, goalsEn, solutionDe, solutionEn,
    resultsDe, resultsEn, tech, quote
  }));
}

// PR creation handler
const createPR = useCallback(async () => {
  try {
    setPrLoading(true);
    setPrLink(null);

    const minimized = toPipelineCases(items);
    const body = {
      filePath: "src/data/cases.json",
      content: JSON.stringify(minimized, null, 2),
      branchPrefix: "cases-update",
      title: "Update: cases.json",
      description: `Automated update via Admin UI (${minimized.length} cases)`,
    };

    const resp = await fetch("/api/create-pr", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await resp.json();
    if (!resp.ok) throw new Error(data?.error || "PR creation failed");

    setPrLink(data.prUrl);
    alert(`PR erstellt: #${data.prNumber}`);
  } catch (e: any) {
    alert("Fehler beim Erstellen des PR: " + e.message);
  } finally {
    setPrLoading(false);
  }
}, [items]);
```

#### **C) UI Components**
```typescript
// PR Creation Button in Toolbar
<Button 
  variant="outline" 
  onClick={createPR} 
  disabled={prLoading}
>
  {prLoading ? "Erstelle PR…" : "Änderungen als PR"}
</Button>
{prLink && (
  <a href={prLink} target="_blank" rel="noreferrer" className="text-teal-700 dark:text-teal-400 underline ml-2">
    PR öffnen
  </a>
)}
```

### 🚀 **Setup Instructions**

#### **1. Install Dependencies**
```bash
npm install -D @octokit/rest
```

#### **2. Vercel Environment Variables**
Set these in your Vercel project settings:

```env
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
GITHUB_OWNER=quantivaadvisory
GITHUB_REPO=website
GITHUB_BASE_BRANCH=main
```

#### **3. GitHub Token Permissions**
The token needs these scopes:
- `repo` (for private repos) or `public_repo` (for public repos)
- `contents:write` (to create files)
- `pull_requests:write` (to create PRs)

#### **4. Deploy to Vercel**
```bash
vercel --prod
```

### 🎯 **How It Works**

#### **Step 1: User Action**
1. User makes changes in Admin Dashboard
2. Clicks "Änderungen als PR" button
3. Loading state shows "Erstelle PR…"

#### **Step 2: API Processing**
1. **Validate input**: Check required fields and content
2. **Get base branch**: Fetch latest commit SHA from main branch
3. **Create branch**: Generate unique branch name with timestamp
4. **Commit file**: Update `src/data/cases.json` with new content
5. **Create PR**: Open pull request with descriptive title and body

#### **Step 3: User Feedback**
1. **Success**: Show PR number and link to open PR
2. **Error**: Display clear error message
3. **Loading**: Disable button and show loading state

### 🔒 **Security Features**

#### **A) Token Security**
- ✅ **Server-side only**: Token never exposed to client
- ✅ **Environment variables**: Secure storage in Vercel
- ✅ **Minimal permissions**: Only required GitHub scopes

#### **B) Input Validation**
- ✅ **Content validation**: Ensure valid JSON content
- ✅ **Method validation**: Only POST requests allowed
- ✅ **Error handling**: Graceful error responses

#### **C) Branch Management**
- ✅ **Unique branches**: Timestamp-based naming prevents conflicts
- ✅ **Base branch**: Always starts from latest main
- ✅ **Clean commits**: Proper author and message formatting

### 🧪 **Testing**

#### **A) Local Development**
1. **Test API function**: Use Vercel CLI for local testing
2. **Test UI integration**: Verify button states and error handling
3. **Test data flow**: Ensure proper JSON formatting

#### **B) Production Testing**
1. **Create test case**: Make small change in admin
2. **Create PR**: Click button and verify PR creation
3. **Verify CI**: Check that build and validation run on PR
4. **Test merge**: Verify PR can be merged successfully

### 🎉 **Benefits**

#### **A) Workflow Integration**
- **Seamless CI/CD**: Changes automatically trigger build pipeline
- **Code review**: All changes go through PR process
- **Version control**: Proper Git history and branching
- **Team collaboration**: Multiple admins can work safely

#### **B) Data Quality**
- **Validation**: CI runs strict validation on all changes
- **Consistency**: Pipeline format ensures data integrity
- **Testing**: Automated testing before merge
- **Rollback**: Easy to revert changes if needed

#### **C) User Experience**
- **One-click PR**: Simple button to create PR
- **Real-time feedback**: Loading states and success messages
- **Direct access**: Link to open PR immediately
- **Error handling**: Clear error messages for troubleshooting

### 🚨 **Troubleshooting**

#### **Common Issues**

1. **403 Forbidden**:
   - Check GitHub token permissions
   - Verify repository access
   - Ensure token is not expired

2. **Reference already exists**:
   - Branch name collision (rare with timestamp)
   - Try different branch prefix
   - Check for existing branches

3. **409 Conflict**:
   - File was modified since last fetch
   - Update base branch and retry
   - Check for concurrent changes

4. **Rate limits**:
   - GitHub API rate limiting
   - Wait and retry
   - Check rate limit headers

#### **Debug Steps**

1. **Check environment variables**:
   ```bash
   vercel env ls
   ```

2. **Test API locally**:
   ```bash
   vercel dev
   ```

3. **Check GitHub token**:
   ```bash
   curl -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/user
   ```

4. **Verify repository access**:
   ```bash
   curl -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/$GITHUB_OWNER/$GITHUB_REPO
   ```

---

## ✅ **Current Workflow** (Updated 2025-10-10)

The **simplified workflow** for content updates:

### 1. **Edit Content via Admin Dashboard**
- Navigate to `/admin` or `/admin/content`
- Make changes to cases, services, team, or other content
- Click **"Download JSON"** to export changes

### 2. **Manual Git Commit**
```bash
# Copy downloaded JSON to src/data/
cp ~/Downloads/cases.json src/data/cases.json

# Review changes
git diff src/data/cases.json

# Commit changes
git add src/data/cases.json
git commit -m "Update: cases.json via Admin Dashboard"

# Push to GitHub
git push origin main
```

### 3. **Automated Deployment**
- Vercel automatically deploys on push to `main`
- GitHub Actions run validation tests
- Changes go live within ~2 minutes

### 🎯 **Benefits of Current Workflow:**

- ✅ **No serverless dependencies** - Simpler build process
- ✅ **Direct file editing** - No API overhead
- ✅ **Git history intact** - Manual commits with proper messages
- ✅ **Faster deployments** - No API function cold starts
- ✅ **Easier debugging** - Transparent Git workflow
- ✅ **Version control** - Full control over commit messages

### 📝 **Alternative: GitHub Web UI**

You can also edit files directly on GitHub:
1. Navigate to `src/data/cases.json` on GitHub
2. Click **"Edit this file"** (pencil icon)
3. Paste JSON content from Admin Dashboard
4. Add commit message
5. Click **"Commit changes"**

---

## 🔧 **For Future Reference: API Implementation**

If you want to **re-implement** the serverless API approach:
1. Review commit history for `/api/create-pr.ts` implementation
2. Add missing dependencies: `@octokit/rest`, `@vercel/node`
3. Configure environment variables on Vercel
4. See legacy documentation above for code examples

**Current Status**: API removed in favor of simplified Git workflow ✅
