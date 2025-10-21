// Automatische Video-Generierung für Content
const AutoVideoGenerator = () => {
  const generateVideosForContent = async () => {
    const contentVideos = [
      {
        id: 'hero',
        prompt: 'Modern corporate office with digital transformation elements, professional lighting, abstract technology',
        duration: 10,
        quality: '1080p',
        usage: 'hero-background'
      },
      {
        id: 'sap-service',
        prompt: 'SAP S/4HANA system interface with data flowing, modern dashboard, professional business environment',
        duration: 8,
        quality: '720p',
        usage: 'sap-service-background'
      },
      {
        id: 'cloud-service',
        prompt: 'Cloud infrastructure visualization, servers and data centers, modern technology, network connections',
        duration: 8,
        quality: '720p',
        usage: 'cloud-service-background'
      },
      {
        id: 'ai-service',
        prompt: 'AI neural networks visualization, data processing, machine learning concepts, futuristic technology',
        duration: 8,
        quality: '720p',
        usage: 'ai-service-background'
      },
      {
        id: 'security-service',
        prompt: 'Cybersecurity shield protecting digital assets, network security visualization, data protection',
        duration: 8,
        quality: '720p',
        usage: 'security-service-background'
      }
    ];

    const results = [];
    
    for (const videoConfig of contentVideos) {
      try {
        console.log(`Generating video for: ${videoConfig.id}`);
        
        const response = await fetch('/api/video-generation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt: videoConfig.prompt,
            duration: videoConfig.duration,
            quality: videoConfig.quality
          })
        });
        
        const data = await response.json();
        
        if (data.success) {
          results.push({
            id: videoConfig.id,
            url: data.videoUrl,
            usage: videoConfig.usage,
            prompt: videoConfig.prompt
          });
          
          // Optional: Video zu Cloudinary hochladen
          await uploadVideoToCloudinary(data.videoUrl, videoConfig.id);
        }
        
        // Rate limiting - warten zwischen Requests
        await new Promise(resolve => setTimeout(resolve, 2000));
        
      } catch (error) {
        console.error(`Failed to generate video for ${videoConfig.id}:`, error);
      }
    }
    
    return results;
  };

  const uploadVideoToCloudinary = async (videoUrl: string, videoId: string) => {
    // Hier würde die Cloudinary-Upload-Logik stehen
    console.log(`Uploading ${videoId} to Cloudinary...`);
    // Implementation für Cloudinary Upload
  };

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4">Auto Video Generator</h3>
      <p className="text-gray-600 mb-4">
        Generiert automatisch Videos für alle Hauptbereiche der Website
      </p>
      
      <button
        onClick={generateVideosForContent}
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Generate All Content Videos
      </button>
      
      <div className="mt-6">
        <h4 className="font-semibold mb-2">Videos werden generiert für:</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Hero-Section Hintergrund</li>
          <li>SAP Service-Seite</li>
          <li>Cloud Service-Seite</li>
          <li>AI Service-Seite</li>
          <li>Security Service-Seite</li>
        </ul>
      </div>
    </div>
  );
};
