// Service-Seite mit Ihrem generierten Video
const ServicePageWithVideo = ({ serviceType }: { serviceType: string }) => {
  const serviceVideos = {
    sap: "https://res.cloudinary.com/dbrisux8i/video/upload/v1234567890/generated-videos/video-1761079894386.mp4",
    cloud: "https://res.cloudinary.com/dbrisux8i/video/upload/v1234567891/service-videos/cloud-service.mp4",
    ai: "https://res.cloudinary.com/dbrisux8i/video/upload/v1234567892/service-videos/ai-service.mp4",
    security: "https://res.cloudinary.com/dbrisux8i/video/upload/v1234567893/service-videos/security-service.mp4"
  };

  const currentVideo = serviceVideos[serviceType] || serviceVideos.sap;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Fixed Background Video */}
      <div className="fixed inset-0 z-0">
        <video
          src={currentVideo}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        {/* Minimal Video Overlay - Only for text readability */}
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-32 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                {serviceType.toUpperCase()}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Professionelle {serviceType} Beratung für Ihre digitale Transformation
              </p>
            </div>
          </div>
        </section>

        {/* Service Content */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Unsere {serviceType.toUpperCase()} Expertise
                </h2>
                <p className="text-gray-300 mb-6">
                  Mit jahrelanger Erfahrung unterstützen wir Sie bei der Modernisierung Ihrer {serviceType} Landschaft.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>End-to-End {serviceType} Beratung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Custom Development & Extensions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Integration & Migration</span>
                  </li>
                </ul>
              </div>
              <div>
                {/* Additional content */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};