// Beispiel: Service-Seite mit generiertem Video
const ServicePageWithVideo = ({ serviceType }: { serviceType: string }) => {
  const [serviceVideo, setServiceVideo] = useState('');

  const prompts = {
    sap: "SAP S/4HANA system interface with data flowing, modern dashboard, professional business environment",
    cloud: "Cloud infrastructure visualization, servers and data centers, modern technology",
    ai: "AI neural networks visualization, data processing, machine learning concepts",
    security: "Cybersecurity shield protecting digital assets, network security visualization"
  };

  const generateServiceVideo = async () => {
    const response = await fetch('/api/video-generation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: prompts[serviceType] || "Professional business technology scene",
        duration: 8,
        quality: "720p"
      })
    });
    
    const data = await response.json();
    if (data.success) {
      setServiceVideo(data.videoUrl);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Video */}
      {serviceVideo && (
        <div className="fixed inset-0 z-0">
          <video
            src={serviceVideo}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {/* Service Content */}
      </div>
    </div>
  );
};
