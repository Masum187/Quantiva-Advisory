// Hero-Section mit Ihrem generierten Video
const HeroWithGeneratedVideo = () => {
  const heroVideoUrl = "https://res.cloudinary.com/dbrisux8i/video/upload/v1234567890/generated-videos/video-1761079894386.mp4";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-105"
      >
        <source src={heroVideoUrl} type="video/mp4" />
      </video>
      
      {/* Video Overlay für Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/50 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      
      {/* Hero Content */}
      <div className="relative z-10 px-6 max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Digitale{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
            Transformation
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
          Strategische Beratung, technische Exzellenz und nachhaltige Lösungen für Ihren digitalen Erfolg
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-teal-600 hover:bg-teal-500 rounded-xl font-semibold transition-colors">
            Jetzt Beraten lassen
          </button>
          <button className="px-8 py-4 border border-white/30 hover:bg-white/10 rounded-xl font-semibold transition-colors">
            Projekte ansehen
          </button>
        </div>
      </div>
    </section>
  );
};