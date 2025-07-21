"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center min-h-[80vh] w-full overflow-hidden bg-blue-50">
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
      {/* Background image placeholder */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Construction background"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto px-4 animate-fadein-up">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-4 drop-shadow-lg">Your Partner in Building Success 🏗️</h1>
        <p className="text-lg text-gray-800 mb-6">
          With over 40 years of hands-on experience in residential and commercial construction, I deliver expert guidance to ensure your projects succeed—on time, on budget, and beyond expectations.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-blue-700 text-white font-semibold rounded shadow-lg transition-all duration-200 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 animate-pulse hover:animate-none"
        >
          Get in Touch
        </a>
      </div>
      <style jsx>{`
        @keyframes fadein-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein-up {
          animation: fadein-up 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
      `}</style>
    </div>
  );
} 