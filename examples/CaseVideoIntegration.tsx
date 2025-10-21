// Beispiel: Case Study mit generiertem Video
const CaseStudyWithVideo = ({ caseData }: { caseData: any }) => {
  const [caseVideo, setCaseVideo] = useState('');

  const generateCaseVideo = async () => {
    const prompt = `Before and after transformation of ${caseData.industry} company, 
                   digital transformation process, modern technology implementation, 
                   professional business environment`;
    
    const response = await fetch('/api/video-generation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: prompt,
        duration: 10,
        quality: "1080p"
      })
    });
    
    const data = await response.json();
    if (data.success) {
      setCaseVideo(data.videoUrl);
    }
  };

  return (
    <section className="relative h-[65vh] md:h-[70vh] overflow-hidden flex items-center justify-center">
      {caseVideo ? (
        <video
          src={caseVideo}
          poster={caseData.heroImage}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <Image 
          src={caseData.heroImage} 
          alt={caseData.title} 
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
      {/* Case Study Content */}
    </section>
  );
};
