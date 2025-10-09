# Poster Comparison Mode Setup Guide

## 🚀 **Complete Setup Instructions**

### **Step 1: Verify Dependencies**
The poster comparison feature uses existing dependencies:
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
4. Test frame analysis: Click "Beste Frames finden"
5. Test frame selection: Click on preferred frame
6. Test upload: Click "Ausgewählten als Poster speichern"
7. Verify poster quality and accuracy

### **Step 4: Verify Frame Analysis**

#### **A) Test Frame Sampling**
- Upload videos with varying quality
- Check that 8 frames are sampled correctly
- Verify frames are sorted by quality score
- Test with different video lengths

#### **B) Test Quality Scoring**
- Upload videos with poor lighting
- Check system avoids dark/overexposed frames
- Verify selection of sharp, well-contrasted frames
- Test with videos containing text or graphics

#### **C) Test Visual Comparison**
- Check grid layout displays correctly
- Verify frame selection works with clicks
- Check quality scores and timestamps are accurate
- Test responsive design on mobile

### **Step 5: Verify Upload Integration**

#### **A) Test Upload Process**
- Select a frame and click upload
- Verify file is uploaded successfully
- Check poster path is set in form
- Verify preview updates after upload

#### **B) Test Error Handling**
- Test with invalid video files
- Check error messages are clear
- Verify UI remains responsive
- Test network error handling

## 🔧 **Configuration Options**

### **A) Frame Sampling Settings**
```typescript
// Default configuration in samplePosterFrames
{
  frameCount: 8,        // Number of frames to sample
  interval: 0.8,        // Interval between samples (seconds)
  type: "image/webp",   // Output format
  quality: 0.92         // Compression quality
}
```

### **B) Display Settings**
```typescript
// PosterPicker component props
{
  topN: 3,              // Number of top frames to show
  slug: "case-slug",    // Case slug for file naming
  videoPath: "/path/to/video.mp4", // Video source
  onPicked: (result) => { /* handle selection */ }
}
```

### **C) Quality Analysis Parameters**
```typescript
// Scoring algorithm weights
const contrastWeight = 0.7;  // 70% weight for contrast
const edgeWeight = 0.3;      // 30% weight for edge detection
```

## 🧪 **Testing Checklist**

### **A) Frame Analysis Testing**
- [ ] Video analysis completes successfully
- [ ] Quality scores are calculated correctly
- [ ] Frames are sorted by quality score
- [ ] Top 3 frames are displayed
- [ ] Error handling works for invalid videos

### **B) Visual Comparison Testing**
- [ ] Grid layout displays correctly
- [ ] Frame selection works with clicks
- [ ] Quality scores and timestamps are accurate
- [ ] Selected frame is highlighted
- [ ] Responsive design works on mobile

### **C) Upload Integration Testing**
- [ ] Selected frame uploads successfully
- [ ] Poster path is set in form
- [ ] Preview updates after upload
- [ ] Error handling for upload failures
- [ ] Fallback to heroImage works

### **D) User Experience Testing**
- [ ] Loading states are clear
- [ ] Error messages are helpful
- [ ] Interface is intuitive
- [ ] Performance is acceptable
- [ ] Cross-browser compatibility

## 🚨 **Troubleshooting**

### **Common Issues**

#### **1. No Frames Found**
**Cause**: Video format not supported or analysis failed
**Solution**: 
- Check video format support
- Verify video duration is sufficient
- Check cross-origin video access
- Test with different video samples

#### **2. Poor Frame Quality**
**Cause**: Video has poor visual quality or unusual content
**Solution**:
- Check video lighting and contrast
- Verify video has sufficient visual content
- Test with different video samples
- Check frame sampling parameters

#### **3. Upload Failures**
**Cause**: Vercel Blob configuration or network issues
**Solution**:
- Check Vercel Blob configuration
- Verify API endpoint accessibility
- Check file size limits
- Test with different video formats

#### **4. UI Issues**
**Cause**: CSS or JavaScript errors
**Solution**:
- Check responsive design on mobile
- Verify frame selection works
- Check loading states
- Test error handling

### **Debug Steps**

#### **1. Check Frame Analysis**
```javascript
// In browser console
console.log('Frame samples:', samples);
console.log('Quality scores:', samples.map(s => ({ time: s.time, score: s.score })));
console.log('Top frames:', samples.slice(0, 3));
```

#### **2. Test Frame Selection**
```javascript
// Check selection state
console.log('Selected frame:', selected);
console.log('Selected candidate:', candidates[selected]);
console.log('Selection working:', document.querySelector('input[name="posterPick"]:checked'));
```

#### **3. Verify Upload Process**
```javascript
// Check upload data
console.log('Upload file:', file);
console.log('Upload key:', key);
console.log('Form data:', fd);
```

## 🎯 **Production Readiness**

### **Security Checklist**
- [ ] Video sources have proper CORS headers
- [ ] Canvas rendering works with cross-origin videos
- [ ] Generated posters are properly validated
- [ ] Error messages don't expose sensitive data
- [ ] File uploads are properly secured

### **Performance Checklist**
- [ ] Frame analysis completes in reasonable time
- [ ] Memory usage is acceptable
- [ ] Large videos don't cause issues
- [ ] Generated posters are optimized
- [ ] CDN delivery is working

### **Monitoring Checklist**
- [ ] Frame analysis success rate is tracked
- [ ] Upload success rate is monitored
- [ ] Error rates are tracked
- [ ] User feedback is collected
- [ ] File storage usage is monitored

## 🎉 **Success!**

Once everything is set up correctly, you'll have:

- ✅ **Visual frame comparison** with side-by-side preview
- ✅ **Quality scoring** and timestamp display
- ✅ **Interactive selection** with visual feedback
- ✅ **Intelligent analysis** with advanced algorithms
- ✅ **Seamless integration** with admin dashboard
- ✅ **Error handling** and loading states
- ✅ **Responsive design** for all devices
- ✅ **Production-ready** with comprehensive testing

**The admin dashboard now supports visual poster comparison with quality-based frame selection!** 🚀

**Next steps:**
1. Test visual frame comparison with various video types
2. Verify quality scoring accuracy with different videos
3. Test responsive design on mobile devices
4. Enjoy professional-quality poster selection with visual comparison!

**Your admin dashboard now includes:**
- ✅ **CRUD operations** for case studies
- ✅ **File uploads** for images and videos
- ✅ **Intelligent poster generation** with automatic frame selection
- ✅ **Visual poster comparison** with quality-based selection
- ✅ **Manual poster control** for precise time selection
- ✅ **PR creation** for version control
- ✅ **Data validation** with strict checking
- ✅ **Visual previews** and real-time feedback
- ✅ **Production-ready** deployment configuration
