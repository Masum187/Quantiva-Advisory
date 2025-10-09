# Poster Generation Setup Guide

## 🚀 **Complete Setup Instructions**

### **Step 1: Verify Dependencies**
The poster generation feature uses existing dependencies:
- `@vercel/blob` (already installed)
- `@ffmpeg/ffmpeg` (already installed)
- `@ffmpeg/util` (already installed)

No additional installation required!

### **Step 2: Verify Vercel Blob Setup**
Ensure your Vercel Blob is configured:
1. Vercel Dashboard → Your Project → Storage
2. Blob store is created and active
3. `BLOB_READ_WRITE_TOKEN` environment variable is set

### **Step 3: Test the Feature**

#### **A) Local Testing**
```bash
# Start development server
npm start

# In another terminal, start Vercel dev server
vercel dev
```

#### **B) Production Testing**
1. Go to your deployed admin dashboard: `https://your-domain.com/admin`
2. Create or edit a case
3. Upload a video using "Video hochladen"
4. Click "Poster aus Video erzeugen"
5. Verify poster is generated and displayed

### **Step 4: Verify Integration**

#### **A) Check Type System**
- `heroPoster` field is available in CaseItem type
- Validation includes heroPoster field
- Export function includes heroPoster

#### **B) Check Validation**
```bash
# Test validation with heroPoster
npm run validate:cases:strict
```

#### **C) Check Export**
- Export JSON includes heroPoster field
- PR creation includes heroPoster in pipeline format

## 🔧 **Configuration Files**

### **A) Type Definitions**
```typescript
type CaseItem = {
  // ... existing fields
  heroImage?: string | null;
  heroMedia?: string | null;
  heroPoster?: string | null;  // <-- NEU
  // ... rest of fields
};
```

### **B) Validation Schema**
```javascript
// scripts/validate-cases.mjs
heroPoster: { type: ["string", "null"], pattern: "^\\/[^?#]+\\.(jpg|jpeg|png|webp)$" },
```

### **C) Asset Validation**
```javascript
// scripts/validate-cases.mjs
const files = [
  c.heroImage && path.join(ROOT, "public", c.heroImage.replace(/^\//, "")),
  c.heroMedia && path.join(ROOT, "public", c.heroMedia.replace(/^\//, "")),
  c.heroPoster && path.join(ROOT, "public", c.heroPoster.replace(/^\//, "")), // <-- NEU
].filter(Boolean);
```

## 🧪 **Testing Checklist**

### **A) Local Development**
- [ ] PosterButton component renders correctly
- [ ] Button is disabled when no video is present
- [ ] Video frame capture works correctly
- [ ] Poster upload completes successfully
- [ ] Preview is updated after generation
- [ ] heroImage is set if empty

### **B) Production Deployment**
- [ ] Environment variables are set correctly
- [ ] Vercel Blob token has correct permissions
- [ ] Poster generation works end-to-end
- [ ] Generated posters are publicly accessible
- [ ] Validation passes with heroPoster field

### **C) Video Management**
- [ ] Various video formats work (MP4, WebM)
- [ ] Cross-origin videos work correctly
- [ ] Error handling works for invalid videos
- [ ] Generated posters are properly formatted
- [ ] Performance is acceptable for large videos

## 🚨 **Troubleshooting**

### **Common Issues**

#### **1. Poster Generation Fails**
**Cause**: Video loading or canvas rendering issue
**Solution**: 
- Check video file format support
- Verify video loads correctly
- Check browser console for errors
- Ensure video has proper CORS headers

#### **2. Canvas Security Error**
**Cause**: Cross-origin video loading issue
**Solution**:
- Ensure video has proper CORS headers
- Check video source is accessible
- Verify cross-origin video loading
- Test with same-origin videos first

#### **3. Upload Fails After Generation**
**Cause**: Vercel Blob or network issue
**Solution**:
- Check Vercel Blob token
- Verify network connection
- Check file size limits
- Test with smaller video files

#### **4. Preview Not Showing**
**Cause**: Generated poster URL issue
**Solution**:
- Check generated poster URL
- Verify Vercel Blob access
- Check browser compatibility
- Test with different video formats

### **Debug Steps**

#### **1. Check Video Loading**
```javascript
// In browser console
const video = document.createElement('video');
video.src = 'your-video-url';
video.onloadedmetadata = () => console.log('Video loaded:', video.duration);
video.onerror = (e) => console.error('Video error:', e);
```

#### **2. Check Canvas Rendering**
```javascript
// Test canvas rendering
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
console.log('Canvas context:', ctx);
```

#### **3. Check Blob Generation**
```javascript
// Test blob generation
canvas.toBlob((blob) => {
  console.log('Blob size:', blob.size);
  console.log('Blob type:', blob.type);
}, 'image/webp', 0.9);
```

## 🎯 **Production Readiness**

### **Security Checklist**
- [ ] Video sources have proper CORS headers
- [ ] Canvas rendering works with cross-origin videos
- [ ] Generated posters are properly validated
- [ ] Error messages don't expose sensitive data
- [ ] File uploads are properly secured

### **Performance Checklist**
- [ ] Poster generation is reasonably fast
- [ ] Memory usage is acceptable
- [ ] Large videos don't cause issues
- [ ] Generated posters are optimized
- [ ] CDN delivery is working

### **Monitoring Checklist**
- [ ] Poster generation success rate is tracked
- [ ] Error rates are monitored
- [ ] Performance metrics are collected
- [ ] User feedback is gathered
- [ ] File storage usage is tracked

## 🎉 **Success!**

Once everything is set up correctly, you'll have:

- ✅ **Automatic poster generation** from video frames
- ✅ **Client-side processing** for fast generation
- ✅ **Smart integration** with existing image system
- ✅ **Type-safe implementation** with TypeScript
- ✅ **Error handling** for robust operation
- ✅ **Performance optimization** with WebP format
- ✅ **User-friendly interface** with clear feedback
- ✅ **Production-ready** with Vercel Blob storage

**Your admin dashboard now supports complete video management with automatic poster generation!** 🚀

**Next steps:**
1. Test poster generation with real videos
2. Verify cross-origin video support
3. Test performance with large video files
4. Enjoy seamless video content management!

**Your admin dashboard now includes:**
- ✅ **CRUD operations** for case studies
- ✅ **File uploads** for images and videos
- ✅ **Automatic poster generation** from videos
- ✅ **PR creation** for version control
- ✅ **Data validation** with strict checking
- ✅ **Visual previews** and real-time feedback
- ✅ **Production-ready** deployment configuration
