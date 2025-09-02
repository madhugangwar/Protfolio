import React, { useEffect, useState } from 'react';
import { ChevronDown, Mail, Github, Linkedin, Phone } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Frontend Developer';
  
  useEffect(() => {
    let currentIndex = 0;
    const typeTimer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeTimer);
      }
    }, 100);

    return () => clearInterval(typeTimer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Coding Animation Background */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating Code Blocks */}
        <div className="absolute top-20 left-20 animate-float">
          <div className="bg-gradient-to-r from-purple-500/30 to-blue-500/30 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-green-400 font-mono text-sm">
              &lt;div className="hero"&gt;
            </div>
          </div>
        </div>
        
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="bg-gradient-to-r from-blue-500/30 to-cyan-500/30 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-blue-400 font-mono text-sm">
              const developer = 'Madhu';
            </div>
          </div>
        </div>

        <div className="absolute bottom-32 left-32 animate-bounce-slow">
          <div className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-purple-400 font-mono text-sm">
              React.createElement()
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
          <div className="relative animate-pulse">
            <div className="w-24 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg border-2 border-purple-400/50">
              <div className="w-full h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-t-md"></div>
              <div className="flex justify-center mt-1">
                <div className="w-8 h-1 bg-slate-600 rounded-full"></div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Madhu Gangwar
            </span>
          </h1>
          
          <div className="h-12 mb-8">
            <p className="text-xl md:text-3xl text-gray-300">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, responsive web applications with modern technologies. 
            . Let's build something amazing together!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <a
              href="mailto:madhugangwar23@gmail.com"
              className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors hover:scale-105 transform duration-200"
            >
              <Mail size={20} />
              <span>madhugangwar23@gmail.com</span>
            </a>
            <div className="flex items-center space-x-2 text-blue-400">
              <Phone size={20} />
              <span>Available on Request</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/madhugangwar"
              className="p-3 rounded-full bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 hover:scale-110 transition-all duration-300 hover:rotate-12"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/madhu-gangwar-3220721b5/"
              className="p-3 rounded-full bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 hover:scale-110 transition-all duration-300 hover:-rotate-12"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="animate-bounce text-white hover:text-purple-400 transition-colors duration-300 hover:scale-125 transform"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;