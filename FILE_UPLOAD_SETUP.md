# File Upload Setup Guide

## 🚀 **Complete Setup Instructions**

### **Step 1: Install Dependencies**
```bash
cd /Users/herijeanmasum/Developer/quantiva-Advisory
npm install -D @vercel/blob @ffmpeg/ffmpeg @ffmpeg/util
```

### **Step 2: Vercel Blob Setup**

#### **A) Create Vercel Blob Store**
1. Go to Vercel Dashboard → Your Project
2. Click "Storage" tab
3. Click "Create Database" → "Blob"
4. Give it a name (e.g., "quantiva-assets")
5. Select region (recommended: closest to your users)

#### **B) Generate Access Token**
1. In your Blob store, go to "Settings"
2. Click "Create Token"
3. Set permissions: "Read/Write"
4. Set expiration (recommended: 1 year)
5. Click "Generate Token"
6. **Copy the token immediately** (you won't see it again)

### **Step 3: Environment Variables**

#### **A) Set Vercel Environment Variables**
In your Vercel project dashboard:

1. Go to Project Settings → Environment Variables
2. Add this variable:

```env
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxxxxxxxxxxxxxx
```

#### **B) Environment Variable Details**
- **BLOB_READ_WRITE_TOKEN**: Your Vercel Blob Read/Write token
- **Scope**: Production, Preview, Development (all environments)

### **Step 4: Deploy to Vercel**

#### **A) Deploy via Vercel CLI**
```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Deploy to production
vercel --prod
```

#### **B) Deploy via GitHub Integration**
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on push to main
3. Environment variables are set in Vercel dashboard

### **Step 5: Test the Feature**

#### **A) Local Testing**
```bash
# Start development server (Next.js)
npm run dev

# Optional: Vercel dev server (emulates cloud)
vercel dev
```

#### **B) Production Testing**
1. Go to your deployed admin dashboard: `https://your-domain.com/admin`
2. Create or edit a case
3. Click "Bild hochladen" or "Video hochladen"
4. Select a file and verify upload
5. Check that the path is set correctly

### **Step 6: Verify File Access**

#### **A) Check Uploaded Files**
1. Go to Vercel Dashboard → Storage → Your Blob Store
2. Verify files are uploaded with correct names
3. Check that files are publicly accessible

#### **B) Test File URLs**
1. Copy a file URL from the blob store
2. Open in browser to verify public access
3. Check that files load correctly

## 🔧 **Configuration Files**

### **A) Vercel Configuration (`vercel.json`)**
```json
{
  "version": 2,
  "framework": "nextjs",
  "installCommand": "npm ci --legacy-peer-deps",
  "buildCommand": "npm run build",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

### **B) Upload API (`api/upload.ts`)**
The API function handles:
- Multipart form data processing
- File validation and upload
- Vercel Blob integration
- Error handling and responses

### **C) Uploader Component (`app/components/Uploader.tsx`)**
The component provides:
- File selection and validation
- Preview functionality
- Optional transcoding
- Loading states and error handling

## 🧪 **Testing Checklist**

### **A) Local Development**
- [ ] Uploader component renders correctly
- [ ] File picker opens with correct filters
- [ ] Preview functionality works
- [ ] Upload process completes successfully
- [ ] Form fields are updated correctly

### **B) Production Deployment**
- [ ] Environment variables are set correctly
- [ ] API function responds to requests
- [ ] Vercel Blob token has correct permissions
- [ ] File uploads work end-to-end
- [ ] Files are publicly accessible

### **C) File Management**
- [ ] Images upload and display correctly
- [ ] Videos upload and play correctly
- [ ] Transcoding works (if enabled)
- [ ] File names are generated correctly
- [ ] Paths are normalized properly

## 🚨 **Troubleshooting**

### **Common Issues**

#### **1. Upload Fails with 500 Error**
**Cause**: Vercel Blob token missing or invalid
**Solution**: 
- Check environment variable is set
- Verify token has correct permissions
- Ensure token is not expired

#### **2. Files Not Publicly Accessible**
**Cause**: Incorrect access settings
**Solution**:
- Check Vercel Blob store settings
- Verify `access: "public"` in API
- Check file permissions

#### **3. Preview Not Showing**
**Cause**: File type not supported or browser issue
**Solution**:
- Check file MIME type
- Verify browser compatibility
- Check console for errors

#### **4. Transcoding Fails**
**Cause**: ffmpeg.wasm loading issue
**Solution**:
- Check network connection
- Verify browser memory limits
- Check console for errors

### **Debug Steps**

#### **1. Check Environment Variables**
```bash
vercel env ls
```

#### **2. Test Vercel Blob Token**
```bash
curl -H "Authorization: Bearer $BLOB_READ_WRITE_TOKEN" \
  https://api.vercel.com/v1/blob
```

#### **3. Test Upload API Locally**
```bash
vercel dev
# Test with curl or Postman
curl -X POST http://localhost:3000/api/upload \
  -F "file=@test.jpg" \
  -F "key=/assets/cases/test-hero.jpg"
```

#### **4. Check Browser Console**
```javascript
// Check for errors in browser console
console.log('Upload error:', error);
```

## 🎯 **Production Readiness**

### **Security Checklist**
- [ ] Vercel Blob token stored securely
- [ ] File type validation is working
- [ ] Path normalization prevents directory traversal
- [ ] Error messages don't expose sensitive data
- [ ] CORS settings are appropriate

### **Performance Checklist**
- [ ] Upload API responds quickly
- [ ] Preview generation is efficient
- [ ] Transcoding doesn't block UI
- [ ] File sizes are reasonable
- [ ] CDN caching is working

### **Monitoring Checklist**
- [ ] Upload success rate is tracked
- [ ] Error rates are monitored
- [ ] File storage usage is tracked
- [ ] API response times are measured
- [ ] User feedback is collected

## 🎉 **Success!**

Once everything is set up correctly, you'll have:

- ✅ **Seamless file uploads** with Vercel Blob
- ✅ **Visual previews** for better UX
- ✅ **Optional transcoding** for optimal performance
- ✅ **Automatic path management** for consistency
- ✅ **Type-safe implementation** with TypeScript
- ✅ **Error handling** for robust operation
- ✅ **Mobile-friendly** responsive design
- ✅ **Dark mode support** for consistent theming

**Your admin dashboard now supports full file management with upload capabilities!** 🚀

**Next steps:**
1. Set up Vercel Blob storage
2. Configure environment variables
3. Deploy to Vercel
4. Test file upload functionality
5. Enjoy seamless content management!
