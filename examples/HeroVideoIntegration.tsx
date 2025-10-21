// Beispiel: Hero-Section mit generiertem Video
const HeroWithGeneratedVideo = () => {
  const [heroVideo, setHeroVideo] = useState('');

  // Video generieren für Hero
  const generateHeroVideo = async () => {
    const response = await fetch('/api/video-generation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: "Modern corporate office with digital transformation elements, professional lighting",
        duration: 10,
        quality: "1080p"
      })
    });
    
    const data = await response.json();
    if (data.success) {
      setHeroVideo(data.videoUrl);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {heroVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/50 to-black/80" />
      {/* Hero Content */}
    </section>
  );
};
