# Intelligent Poster Generation Setup Guide

## 🚀 **Complete Setup Instructions**

### **Step 1: Verify Dependencies**
The intelligent poster generation feature uses existing dependencies:
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
4. Test automatic mode: Click "Intelligentes Poster erstellen"
5. Test manual mode: Uncheck "Automatisch" and set specific time
6. Verify poster quality and accuracy

### **Step 4: Verify Intelligence Features**

#### **A) Test Automatic Mode**
- Upload videos with varying quality
- Check that system selects best frames
- Verify avoidance of dark/blurry frames
- Test with different video lengths

#### **B) Test Manual Mode**
- Switch to manual mode
- Set specific time values
- Verify accurate frame capture
- Test edge cases (start/end of video)

#### **C) Test Visual Analysis**
- Upload videos with poor lighting
- Check system avoids overexposed frames
- Verify selection of sharp, well-contrasted frames
- Test with videos containing text or graphics

## 🔧 **Configuration Options**

### **A) Automatic Mode Settings**
```typescript
// Default configuration in autoPosterFromVideo
{
  frameCount: 6,        // Number of frames to sample
  interval: 0.8,        // Interval between samples (seconds)
  type: "image/webp",   // Output format
  quality: 0.9          // Compression quality
}
```

### **B) Manual Mode Settings**
```typescript
// Manual mode configuration
{
  time: 1.0,            // Specific time in seconds
  type: "image/webp",   // Output format
  quality: 0.92         // Compression quality
}
```

### **C) Visual Analysis Parameters**
```typescript
// Scoring algorithm weights
const contrastWeight = 0.7;  // 70% weight for contrast
const edgeWeight = 0.3;      // 30% weight for edge detection
```

## 🧪 **Testing Checklist**

### **A) Automatic Mode Testing**
- [ ] PosterButton component renders correctly
- [ ] Automatic mode is enabled by default
- [ ] Video analysis completes successfully
- [ ] Best frame is selected automatically
- [ ] Generated poster is visually appealing
- [ ] Processing time is reasonable

### **B) Manual Mode Testing**
- [ ] Manual mode toggle works correctly
- [ ] Time input accepts valid values
- [ ] Time input rejects invalid values
- [ ] Frame capture at specified time works
- [ ] Generated poster matches expected time
- [ ] Input is disabled during processing

### **C) Quality Analysis Testing**
- [ ] Dark videos avoid dark frames
- [ ] Bright videos avoid overexposed frames
- [ ] Blurry videos select sharpest frames
- [ ] Short videos are handled correctly
- [ ] Long videos sample appropriately
- [ ] Various video formats work

### **D) Error Handling Testing**
- [ ] Invalid video files are handled gracefully
- [ ] Network errors are caught and displayed
- [ ] Cross-origin videos work correctly
- [ ] Processing errors show clear messages
- [ ] UI remains responsive during errors

## 🚨 **Troubleshooting**

### **Common Issues**

#### **1. Poor Frame Selection in Automatic Mode**
**Cause**: Video has poor visual quality or unusual content
**Solution**: 
- Try manual mode with specific time
- Check video lighting and contrast
- Verify video has sufficient visual content
- Test with different video samples

#### **2. Manual Mode Not Working**
**Cause**: Invalid time input or video loading issue
**Solution**:
- Verify time is within video duration
- Check video is fully loaded
- Ensure time input is valid number
- Test with different time values

#### **3. Analysis Takes Too Long**
**Cause**: Large video file or slow processing
**Solution**:
- Check video file size
- Verify browser performance
- Test with shorter videos
- Check network connection

#### **4. Cross-Origin Video Issues**
**Cause**: Video server doesn't allow cross-origin access
**Solution**:
- Check video server CORS headers
- Test with same-origin videos
- Verify video URL accessibility
- Check browser console for errors

### **Debug Steps**

#### **1. Check Video Analysis**
```javascript
// In browser console
console.log('Video duration:', video.duration);
console.log('Sampling configuration:', { frameCount: 6, interval: 0.8 });
console.log('Frame scores:', samples.map(s => ({ time: s.time, score: s.score })));
```

#### **2. Test Manual Mode**
```javascript
// Check manual time input
console.log('Manual time:', posterTime);
console.log('Video current time:', video.currentTime);
console.log('Time within duration:', posterTime < video.duration);
```

#### **3. Verify Visual Analysis**
```javascript
// Check frame analysis
console.log('Frame dimensions:', canvas.width, canvas.height);
console.log('Image data length:', imgData.data.length);
console.log('Calculated score:', score);
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
- [ ] Poster generation success rate is tracked
- [ ] Analysis performance is monitored
- [ ] Error rates are tracked
- [ ] User feedback is collected
- [ ] File storage usage is monitored

## 🎉 **Success!**

Once everything is set up correctly, you'll have:

- ✅ **Intelligent frame selection** using advanced visual analysis
- ✅ **Manual time control** for precise frame selection
- ✅ **Dual mode operation** with easy switching
- ✅ **Advanced algorithms** for visual quality assessment
- ✅ **Cross-origin support** for CDN-hosted videos
- ✅ **Performance optimization** with efficient processing
- ✅ **User-friendly interface** with clear options
- ✅ **Production-ready** with comprehensive error handling

**Your admin dashboard now supports intelligent video poster generation with automatic frame selection!** 🚀

**Next steps:**
1. Test intelligent frame selection with various video types
2. Verify manual mode accuracy with specific time inputs
3. Test performance with long videos
4. Enjoy professional-quality poster generation!

**Your admin dashboard now includes:**
- ✅ **CRUD operations** for case studies
- ✅ **File uploads** for images and videos
- ✅ **Intelligent poster generation** with automatic frame selection
- ✅ **Manual poster control** for precise time selection
- ✅ **PR creation** for version control
- ✅ **Data validation** with strict checking
- ✅ **Visual previews** and real-time feedback
- ✅ **Production-ready** deployment configuration
