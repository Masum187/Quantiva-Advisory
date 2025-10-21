// Test-Video-Generierung mit echten API Keys
const generateRealVideo = async () => {
  try {
    const response = await fetch('/api/cms/video-generator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: 'Modern corporate office with digital transformation elements, professional lighting',
        duration: 8,
        quality: '720p',
        folder: 'generated-videos',
        title: 'Corporate Office Video'
      }),
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Video generated successfully!');
      console.log('Cloudinary URL:', data.cloudinary.url);
      return data.cloudinary.url;
    } else {
      throw new Error(data.error || 'Video generation failed');
    }
  } catch (error) {
    console.error('Video generation error:', error);
    return null;
  }
};
