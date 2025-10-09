// /api/upload.ts
import { put } from "@vercel/blob";

export const config = { runtime: "edge" };

export default async function handler(req: Request): Promise<Response> {
  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
    }

    const form = await req.formData();
    const file = form.get("file");
    const key = String(form.get("key") || "");

    if (!(file instanceof File)) {
      return new Response(JSON.stringify({ error: "file required" }), { status: 400 });
    }
    if (!key || !key.startsWith("/")) {
      return new Response(JSON.stringify({ error: "key must start with /" }), { status: 400 });
    }

    // vercel/blob erwartet einen relativen Pfad ohne führenden Slash
    const objectName = key.replace(/^\//, "");

    const res = await put(objectName, file, {
      access: "public",
      contentType: file.type || undefined,
      addRandomSuffix: false,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    // res: { url, pathname, ...(size, uploadedAt, ...)}
    return new Response(JSON.stringify({ ok: true, url: res.url, path: `/${res.pathname}` }), {
      headers: { "content-type": "application/json" },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || "upload failed" }), { status: 500 });
  }
}
