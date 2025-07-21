"use client";

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] w-full overflow-hidden bg-blue-50">
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[80vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Video section - Left side */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-auto max-h-[60vh] object-cover"
              poster="/hero-video-poster.jpg"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        {/* Content section - Right side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8 animate-fadein-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-800 mb-4 drop-shadow-lg">
            Your Partner in Building Success 🏗️
          </h1>
          <p className="text-lg text-gray-800 mb-6 max-w-lg mx-auto lg:mx-0">
            With over 40 years of hands-on experience in residential and commercial construction, I deliver expert guidance to ensure your projects succeed—on time, on budget, and beyond expectations.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-700 text-white font-semibold rounded shadow-lg transition-all duration-200 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadein-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein-up {
          animation: fadein-up 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        
        /* Video optimization for different devices */
        @media (max-width: 640px) {
          video {
            max-height: 40vh;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          video {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
} 