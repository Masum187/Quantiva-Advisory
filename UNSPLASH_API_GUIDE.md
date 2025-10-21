# 🖼️ Unsplash API Integration Guide

## ✅ **Installation Complete**

Die Unsplash API ist jetzt vollständig integriert und einsatzbereit!

---

## 🔑 **Konfiguration**

### **1. Environment Variables**

```bash
# .env.local (bereits erstellt)
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=wYFqPnH3EJa-ZKFD_BteK9VtXrKKagNg7vb7J8WQFNA
UNSPLASH_SECRET_KEY=2qO47jco6Gl3CKAKSzr7_urQ2DF-QfYHb1uj-cxMVF0
```

⚠️ **WICHTIG:** Diese Keys sollten nach dem Testing auf Unsplash regeneriert werden!

### **2. Vercel Environment Variables**

Für Production Deployment auf Vercel:

```bash
# Vercel Dashboard → Settings → Environment Variables
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=wYFqPnH3EJa-ZKFD_BteK9VtXrKKagNg7vb7J8WQFNA
UNSPLASH_SECRET_KEY=2qO47jco6Gl3CKAKSzr7_urQ2DF-QfYHb1uj-cxMVF0
```

---

## 📚 **Usage Examples**

### **Example 1: Random Photo (API)**

```typescript
import { getRandomPhoto } from '@/app/lib/utils/unsplash';
import UnsplashImage from '@/app/components/UnsplashImage';

export default async function MyPage() {
  const photo = await getRandomPhoto('artificial intelligence');

  return (
    <div className="relative h-96 w-full">
      <UnsplashImage 
        photo={photo} 
        alt="AI Technology"
        fill
        sizes="100vw"
        showAttribution={true}
      />
    </div>
  );
}
```

### **Example 2: Search Photos**

```typescript
import { searchPhotos } from '@/app/lib/utils/unsplash';

const results = await searchPhotos('technology', 1, 10);
console.log(`Found ${results.total} photos`);

results.results.forEach(photo => {
  console.log(`- ${photo.description} by ${photo.user.name}`);
});
```

### **Example 3: Collection Photos**

```typescript
import { getCollectionPhotos, UNSPLASH_COLLECTIONS } from '@/app/lib/utils/unsplash';

// Get photos from AI & Technology collection
const aiPhotos = await getCollectionPhotos(
  UNSPLASH_COLLECTIONS.AI_TECHNOLOGY,
  1,
  5
);
```

### **Example 4: Static URLs (Current Implementation)**

```typescript
import { StaticUnsplashImage } from '@/app/components/UnsplashImage';

<StaticUnsplashImage
  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200"
  alt="AI Technology"
  fill
  sizes="100vw"
/>
```

---

## 🎯 **Use Cases**

### **1. Dynamic Hero Images**

```typescript
// app/components/HeroWithUnsplash.tsx
'use client';

import { useEffect, useState } from 'react';
import { getRandomPhoto, type UnsplashPhoto } from '@/app/lib/utils/unsplash';
import UnsplashImage from '@/app/components/UnsplashImage';

export default function HeroWithUnsplash() {
  const [photo, setPhoto] = useState<UnsplashPhoto | null>(null);

  useEffect(() => {
    getRandomPhoto('business technology').then(setPhoto);
  }, []);

  if (!photo) return <div className="h-screen bg-gray-200 animate-pulse" />;

  return (
    <section className="relative h-screen">
      <UnsplashImage 
        photo={photo}
        alt="Business Technology"
        fill
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-white">
          Discover Innovation
        </h1>
      </div>
    </section>
  );
}
```

### **2. Dynamic Gallery**

```typescript
// app/components/UnsplashGallery.tsx
import { searchPhotos } from '@/app/lib/utils/unsplash';
import UnsplashImage from '@/app/components/UnsplashImage';

export default async function UnsplashGallery({ query }: { query: string }) {
  const results = await searchPhotos(query, 1, 12);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {results.results.map((photo) => (
        <div key={photo.id} className="relative aspect-square">
          <UnsplashImage
            photo={photo}
            alt={photo.alt_description || photo.description || query}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}
```

### **3. Blog Post Featured Images**

```typescript
// Auto-fetch relevant images based on blog post tags
import { searchPhotos } from '@/app/lib/utils/unsplash';

const blogPost = {
  title: "The Future of AI in Business",
  tags: ["AI", "machine learning", "business"],
};

const photo = await searchPhotos(blogPost.tags.join(' '), 1, 1);
const featuredImage = photo.results[0];
```

---

## 📊 **API Rate Limits**

### **Free Tier (Demo)**
- **50 requests/hour**
- Suitable for development and testing

### **Production Tier**
- **5,000 requests/hour**
- Recommended for live sites
- Apply at: https://unsplash.com/oauth/applications/815471

---

## ✅ **Best Practices**

### **1. Always Use Caching**

```typescript
// Good: Uses Next.js cache
const photo = await getRandomPhoto('technology');
// Cached for 1 hour (3600 seconds)

// Bad: No caching
fetch('https://api.unsplash.com/photos/random')
```

### **2. Always Provide Attribution**

```typescript
// Good: Shows photographer credit
<UnsplashImage photo={photo} showAttribution={true} />

// Bad: Violates Unsplash Guidelines
<Image src={photo.urls.regular} alt="..." />
```

### **3. Track Downloads**

```typescript
// Automatic in UnsplashImage component
// Required by Unsplash API guidelines
useEffect(() => {
  trackDownload(photo.links.download_location);
}, [photo]);
```

### **4. Use Fallback Images**

```typescript
import { FALLBACK_IMAGES } from '@/app/lib/utils/unsplash';

const imageUrl = photo?.urls.regular || FALLBACK_IMAGES.AI;
```

---

## 🔧 **Troubleshooting**

### **Error: "NEXT_PUBLIC_UNSPLASH_ACCESS_KEY is not configured"**

**Solution:**
```bash
# Check if .env.local exists
ls -la .env.local

# If not, run setup script
./setup-env.sh

# Restart dev server
npm run dev
```

### **Error: 401 Unauthorized**

**Solution:**
- Verify API key is correct in `.env.local`
- Check if key is active on Unsplash dashboard
- Regenerate key if necessary

### **Error: 403 Rate Limit Exceeded**

**Solution:**
- You've exceeded 50 requests/hour (Demo tier)
- Wait 1 hour or upgrade to Production tier
- Implement better caching strategy

---

## 🚀 **Migration Guide: Static → Dynamic**

### **Before (Static URLs):**

```typescript
<Image 
  src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
  alt="AI Technology"
  fill
/>
```

### **After (Dynamic API):**

```typescript
import { getRandomPhoto } from '@/app/lib/utils/unsplash';
import UnsplashImage from '@/app/components/UnsplashImage';

// Server Component (Recommended)
export default async function Page() {
  const photo = await getRandomPhoto('artificial intelligence');
  
  return (
    <UnsplashImage 
      photo={photo} 
      alt="AI Technology"
      fill
      showAttribution={true}
    />
  );
}
```

---

## 📖 **Official Documentation**

- **Unsplash API Docs:** https://unsplash.com/documentation
- **API Guidelines:** https://help.unsplash.com/en/articles/2511245-unsplash-api-guidelines
- **Your Application:** https://unsplash.com/oauth/applications/815471

---

## ⚠️ **Security Reminder**

**NEVER commit API keys to Git!**

```bash
# ✅ Good: Keys in .env.local (ignored by Git)
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=abc123

# ❌ Bad: Keys in code
const API_KEY = 'abc123';
```

**Always regenerate keys if exposed:**
https://unsplash.com/oauth/applications/815471/settings

---

## 🎉 **Ready to Use!**

Your Unsplash API integration is now complete and ready for production!

**Next Steps:**
1. Test the API with `npm run dev`
2. Add Vercel environment variables
3. Consider upgrading to Production tier for higher rate limits
4. Regenerate API keys after testing

**Questions?** Check the official Unsplash documentation or the examples above.




