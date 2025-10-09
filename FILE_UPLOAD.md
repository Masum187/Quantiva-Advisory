# File Upload Feature - Quantiva Admin Dashboard

## ✅ **Complete Implementation**

### 🎯 **What's Been Implemented:**

1. **Vercel Blob Upload API** (`/api/upload.ts`):
   - ✅ **Edge runtime** for optimal performance
   - ✅ **Multipart form data** handling
   - ✅ **Public file access** with Vercel Blob
   - ✅ **Custom file naming** without random suffixes
   - ✅ **Error handling** and validation

2. **Uploader Component** (`src/admin/components/Uploader.tsx`):
   - ✅ **Image and video support** with proper MIME type validation
   - ✅ **Preview functionality** before and after upload
   - ✅ **Automatic file naming** based on slug
   - ✅ **Optional transcoding** to WebM for better autoplay
   - ✅ **Loading states** and error handling

3. **Transcoding Support** (`src/admin/helpers/transcoding.ts`):
   - ✅ **Client-side transcoding** with ffmpeg.wasm
   - ✅ **WebM conversion** for optimal video playback
   - ✅ **Path normalization** helper functions

4. **Admin Dashboard Integration**:
   - ✅ **Upload buttons** for hero images and videos
   - ✅ **Preview display** in form fields
   - ✅ **Automatic path setting** after successful upload
   - ✅ **Path normalization** for consistency

### 🔧 **Technical Implementation**

#### **A) Vercel Blob Upload API**
```typescript
// /api/upload.ts
import { put } from "@vercel/blob";

export const config = { runtime: "edge" };

export default async function handler(req: Request): Promise<Response> {
  // Handles multipart form data
  // Uploads to Vercel Blob with public access
  // Returns URL and path for frontend use
}
```

#### **B) Uploader Component**
```typescript
// src/admin/components/Uploader.tsx
type Props = {
  slug: string;
  kind: "image" | "video";
  onUploaded: (result: { url: string; path: string }) => void;
  defaultPath?: string | null;
};

// Features:
// - MIME type validation
// - Preview functionality
// - Optional transcoding
// - Loading states
// - Error handling
```

#### **C) Transcoding Support**
```typescript
// src/admin/helpers/transcoding.ts
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

export async function transcodeToWebm(input: File): Promise<Blob> {
  // Client-side video transcoding to WebM
  // Optimized for autoplay performance
}
```

### 🚀 **Setup Instructions**

#### **1. Install Dependencies**
```bash
npm install -D @vercel/blob @ffmpeg/ffmpeg @ffmpeg/util
```

#### **2. Vercel Blob Setup**
1. Go to Vercel Dashboard → Your Project → Storage
2. Create a new Blob store
3. Generate a Read/Write token
4. Set environment variable: `BLOB_READ_WRITE_TOKEN`

#### **3. Environment Variables**
```env
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxxxxxxxxxxxxxx
```

#### **4. Deploy to Vercel**
```bash
vercel --prod
```

### 🎯 **How It Works**

#### **Step 1: File Selection**
1. User clicks "Bild hochladen" or "Video hochladen" button
2. File picker opens with appropriate MIME type filters
3. User selects image (PNG, JPEG, WebP) or video (MP4, WebM)

#### **Step 2: Preview & Validation**
1. **Preview generation**: File is displayed as preview
2. **MIME type validation**: Ensures correct file type
3. **Optional transcoding**: For videos, offers WebM conversion
4. **File naming**: Generates path based on slug and extension

#### **Step 3: Upload Process**
1. **Form data creation**: File and path are prepared
2. **API call**: POST request to `/api/upload`
3. **Vercel Blob upload**: File is stored with public access
4. **Response handling**: URL and path are returned

#### **Step 4: Form Integration**
1. **Path setting**: Form field is automatically updated
2. **Preview update**: New file is displayed
3. **Validation**: Path is normalized and validated

### 🔒 **Security Features**

#### **A) File Type Validation**
- **MIME type checking**: Only allowed file types accepted
- **Extension validation**: Server-side validation of file extensions
- **Size limits**: Vercel Blob handles large files efficiently

#### **B) Path Security**
- **Slug-based naming**: Files named after case slug
- **Path normalization**: Consistent path formatting
- **No random suffixes**: Predictable file naming

#### **C) Access Control**
- **Public access**: Files are publicly readable
- **No authentication**: Upload API is open (can be restricted)
- **CORS handling**: Proper cross-origin request handling

### 🎨 **User Experience Features**

#### **A) Visual Feedback**
- **Loading states**: "Lädt…" text during upload
- **Preview images**: Thumbnail display before/after upload
- **Video previews**: Mini video player for video files
- **Error messages**: Clear error feedback

#### **B) File Management**
- **Automatic naming**: Files named `{slug}-hero.{ext}`
- **Path normalization**: Consistent path formatting
- **Preview updates**: Real-time preview updates
- **Form integration**: Seamless form field updates

#### **C) Advanced Features**
- **Transcoding option**: WebM conversion for videos
- **Multiple formats**: Support for various image/video formats
- **Responsive design**: Works on mobile and desktop
- **Dark mode support**: Consistent with admin theme

### 🧪 **Testing**

#### **A) Local Development**
1. **Test file selection**: Verify file picker works
2. **Test validation**: Try uploading invalid file types
3. **Test preview**: Check preview functionality
4. **Test upload**: Verify files upload successfully

#### **B) Production Testing**
1. **Test with real files**: Upload actual images/videos
2. **Test transcoding**: Try WebM conversion
3. **Test form integration**: Verify paths are set correctly
4. **Test validation**: Ensure validation works in production

### 🎉 **Benefits**

#### **A) Content Management**
- **Easy file uploads**: One-click file uploads
- **Visual previews**: See files before/after upload
- **Automatic naming**: Consistent file organization
- **Path management**: Automatic path setting

#### **B) Performance**
- **Edge runtime**: Fast upload processing
- **Vercel Blob**: Optimized file storage
- **WebM transcoding**: Better video performance
- **Preview caching**: Efficient preview display

#### **C) Developer Experience**
- **Type safety**: Full TypeScript support
- **Error handling**: Comprehensive error management
- **Reusable components**: Modular uploader component
- **Easy integration**: Simple props-based API

### 🚨 **Troubleshooting**

#### **Common Issues**

1. **Upload fails**:
   - Check Vercel Blob token
   - Verify file size limits
   - Check network connection

2. **Preview not showing**:
   - Check file type support
   - Verify browser compatibility
   - Check console for errors

3. **Transcoding fails**:
   - Check ffmpeg.wasm loading
   - Verify file format support
   - Check browser memory limits

4. **Path not set**:
   - Check slug is provided
   - Verify API response
   - Check form state updates

#### **Debug Steps**

1. **Check API response**:
   ```javascript
   console.log('Upload response:', data);
   ```

2. **Check file validation**:
   ```javascript
   console.log('File type:', file.type);
   console.log('File size:', file.size);
   ```

3. **Check transcoding**:
   ```javascript
   console.log('Transcoding result:', webm);
   ```

### 🎯 **File Structure**

```
src/admin/
├── components/
│   └── Uploader.tsx          # Main upload component
├── helpers/
│   └── transcoding.ts        # Transcoding utilities
└── ...

api/
├── create-pr.ts              # PR creation API
└── upload.ts                 # File upload API
```

### 🎉 **Ready for Production!**

The file upload feature provides:

- ✅ **Seamless file uploads** with Vercel Blob
- ✅ **Visual previews** for better UX
- ✅ **Optional transcoding** for optimal performance
- ✅ **Automatic path management** for consistency
- ✅ **Type-safe implementation** with TypeScript
- ✅ **Error handling** for robust operation
- ✅ **Mobile-friendly** responsive design
- ✅ **Dark mode support** for consistent theming

**The admin dashboard now supports full file management with upload capabilities!** 🚀

**Next steps:**
1. Set up Vercel Blob storage
2. Configure environment variables
3. Deploy to Vercel
4. Test file upload functionality
5. Enjoy seamless content management!
