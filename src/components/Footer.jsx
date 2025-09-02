import React from 'react';
import { Code, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-purple-500/20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Code className="h-8 w-8 text-purple-400" />
              <span className="text-white font-bold text-xl">Madhu Gangwar</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-sm">
              Frontend Developer passionate about creating beautiful and responsive web applications .
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/madhugangwar"
                className="p-2 rounded-full bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 hover:scale-110 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/madhu-gangwar-3220721b5/"
                className="p-2 rounded-full bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:madhugangwar23@gmail.com"
                className="p-2 rounded-full bg-green-600/20 text-green-400 hover:bg-green-600/30 hover:scale-110 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Summary */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-bold text-lg mb-4">Technologies</h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-2">
              {['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'SQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30 hover:bg-purple-600/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-gray-300 text-sm">
                Available for freelance projects and full-time opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Madhu Gangwar. All rights reserved.
            </p>
            
            <div className="flex items-center text-gray-300 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 mx-2 animate-pulse" />
              {/* <span>using React.js & Tailwind CSS</span> */}
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-110"
          >
            <Code size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;