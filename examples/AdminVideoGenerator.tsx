// Admin-Dashboard Komponente für Video-Generierung
const VideoGeneratorAdmin = () => {
  const [prompt, setPrompt] = useState('');
  const [duration, setDuration] = useState(8);
  const [quality, setQuality] = useState('720p');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState('');

  const generateVideo = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/video-generation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, duration, quality })
      });
      
      const data = await response.json();
      if (data.success) {
        setGeneratedVideo(data.videoUrl);
        // Optional: Video zu Cloudinary hochladen für permanente Speicherung
        await uploadToCloudinary(data.videoUrl);
      }
    } catch (error) {
      console.error('Video generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const uploadToCloudinary = async (videoUrl: string) => {
    // Video von Comet URL zu Cloudinary hochladen
    const response = await fetch('/api/upload-video', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ videoUrl, folder: 'generated-videos' })
    });
    
    const data = await response.json();
    return data.cloudinaryUrl;
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Video Generator</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Prompt:</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-3 border rounded-lg"
            placeholder="Describe the video you want to generate..."
            rows={3}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Duration:</label>
            <select
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full p-3 border rounded-lg"
            >
              {[5, 8, 10].map(d => (
                <option key={d} value={d}>{d} seconds</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Quality:</label>
            <select
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className="w-full p-3 border rounded-lg"
            >
              <option value="480p">480p</option>
              <option value="720p">720p</option>
              <option value="1080p">1080p</option>
            </select>
          </div>
        </div>
        
        <button
          onClick={generateVideo}
          disabled={isGenerating || !prompt.trim()}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isGenerating ? 'Generating...' : 'Generate Video'}
        </button>
        
        {generatedVideo && (
          <div className="mt-4">
            <video
              src={generatedVideo}
              controls
              className="w-full rounded-lg"
            />
            <p className="text-sm text-gray-600 mt-2">
              Video URL: <a href={generatedVideo} target="_blank" rel="noopener noreferrer" className="text-blue-600">{generatedVideo}</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
