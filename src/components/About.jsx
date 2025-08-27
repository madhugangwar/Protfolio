import React from 'react';
import { User, Heart, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <div className="relative group">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <User size={120} className="text-purple-400 group-hover:text-blue-400 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse group-hover:animate-spin">
                <Code2 className="text-white" size={32} />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center animate-bounce">
                <Heart className="text-white" size={24} />
              </div>
            </div>
          </div>

          <div className="animate-fade-in-right space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Frontend Developer 
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Frontend Developer BCA graduate from Invertis University (2022-25). 
              With a strong foundation in modern web technologies, hands on experience in creating user-friendly, 
              responsive web applications and user friendly applications.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I started web development out of curiosity, which grew into a strong interest in frontend development.
               I enjoy creating clean, responsive, and user-friendly interfaces. As a fresher, I am eager to learn 
               continuously, explore new technologies, and improve my frontend skills while solving real-world problems.            
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
             When I'm not coding, I enjoy exploring new technologies and sharing knowledge through my thoughts on LinkedIn. 
             I'm always excited to take on new challenges and turn creative ideas into reality.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <div className="flex items-center space-x-2 bg-purple-600/20 px-4 py-2 rounded-full hover:bg-purple-600/30 transition-colors">
                <Heart className="text-red-400" size={20} />
                <span className="text-white">Problem Solving</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-600/20 px-4 py-2 rounded-full hover:bg-blue-600/30 transition-colors">
                <Code2 className="text-blue-400" size={20} />
                <span className="text-white">Clean Code</span>
              </div>
              {/* <div className="flex items-center space-x-2 bg-green-600/20 px-4 py-2 rounded-full hover:bg-green-600/30 transition-colors">
                <User className="text-green-400" size={20} />
                <span className="text-white">Responsivenes</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;