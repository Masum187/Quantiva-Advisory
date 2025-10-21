// Fallback-Video-System für Demo-Zwecke
const VideoFallbackSystem = () => {
  const fallbackVideos = [
    {
      id: 'fallback-1',
      title: 'Demo Corporate Video',
      url: 'https://res.cloudinary.com/dbrisux8i/video/upload/v1761079894/demo-videos/corporate-office-demo.mp4',
      duration: 8,
      quality: '720p',
      folder: 'demo-videos',
      isFallback: true
    },
    {
      id: 'fallback-2', 
      title: 'Demo Technology Video',
      url: 'https://res.cloudinary.com/dbrisux8i/video/upload/v1761079895/demo-videos/technology-demo.mp4',
      duration: 10,
      quality: '1080p',
      folder: 'demo-videos',
      isFallback: true
    }
  ];

  const getVideoUrl = (videoId) => {
    const video = fallbackVideos.find(v => v.id === videoId);
    if (video) {
      return video.url;
    }
    
    // Fallback zu einem öffentlichen Demo-Video
    return 'https://res.cloudinary.com/dbrisux8i/video/upload/v1761079894/demo-videos/corporate-office-demo.mp4';
  };

  return {
    fallbackVideos,
    getVideoUrl
  };
};
