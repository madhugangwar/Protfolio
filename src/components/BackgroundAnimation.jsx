import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full animate-pulse blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full animate-pulse blur-3xl animation-delay-2000"></div>
      <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-cyan-600/10 rounded-full animate-pulse blur-2xl animation-delay-4000"></div>
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        ></div>
      ))}
      
      {/* Moving Lines */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.4)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 Q25,30 50,50 T100,30"
            stroke="url(#line-gradient)"
            strokeWidth="0.5"
            fill="none"
            className="animate-draw"
          />
          <path
            d="M0,70 Q25,50 50,70 T100,50"
            stroke="url(#line-gradient)"
            strokeWidth="0.3"
            fill="none"
            className="animate-draw animation-delay-2000"
          />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundAnimation;