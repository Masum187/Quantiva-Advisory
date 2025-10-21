// Video-Management mit Ihrem generierten Video
const VideoManagementDashboard = () => {
  const [videos, setVideos] = useState([
    {
      id: '1',
      title: 'Generated Video 1761079894386',
      url: 'https://res.cloudinary.com/dbrisux8i/video/upload/v1234567890/generated-videos/video-1761079894386.mp4',
      duration: 8,
      quality: '720p',
      folder: 'generated-videos',
      createdAt: new Date().toISOString(),
      metadata: {
        prompt: 'Modern corporate office with digital transformation elements',
        usage: 'hero-background',
        generatedBy: 'MCP System'
      }
    }
  ]);

  const [selectedVideo, setSelectedVideo] = useState(null);

  const downloadVideo = async (video) => {
    try {
      const response = await fetch(video.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${video.title}.mp4`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error('Download failed:', err);
    }
  };

  const copyUrl = (url) => {
    navigator.clipboard.writeText(url);
    // Show success message
  };

  const useVideoInWebsite = (video) => {
    // Integration code for website
    const integrationCode = `
// Hero-Section Integration
const heroVideoUrl = "${video.url}";

<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src={heroVideoUrl} type="video/mp4" />
</video>
    `;
    
    navigator.clipboard.writeText(integrationCode);
    // Show success message
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Video Management</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Video Preview */}
              <div className="relative aspect-video bg-gray-100">
                <video
                  src={video.url}
                  className="w-full h-full object-cover"
                  controls
                />
                <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {video.duration}s
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                
                <div className="space-y-2 text-xs text-gray-500 mb-4">
                  <div>Quality: {video.quality}</div>
                  <div>Folder: {video.folder}</div>
                  <div>Generated: {new Date(video.createdAt).toLocaleDateString()}</div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => downloadVideo(video)}
                    className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded text-xs hover:bg-green-200"
                  >
                    <Download className="w-3 h-3" />
                    Download
                  </button>
                  
                  <button
                    onClick={() => copyUrl(video.url)}
                    className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs hover:bg-blue-200"
                  >
                    <Copy className="w-3 h-3" />
                    Copy URL
                  </button>
                  
                  <button
                    onClick={() => useVideoInWebsite(video)}
                    className="flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs hover:bg-purple-200"
                  >
                    <Video className="w-3 h-3" />
                    Use in Website
                  </button>
                </div>

                {/* Integration Code */}
                <div className="mt-4 p-3 bg-gray-50 rounded text-xs">
                  <div className="font-medium mb-2">Integration Code:</div>
                  <code className="text-gray-600 break-all">
                    {video.url}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
