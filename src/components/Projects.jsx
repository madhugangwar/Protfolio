import React from 'react';
import { ExternalLink, Github, Calendar, Heart, DollarSign, Cloud } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Health Appointment System',
      description: 'A comprehensive full-stack web application for managing medical appointments. Features include patient registration, doctor scheduling, appointment booking, and admin dashboard with real-time notifications.',
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      features: ['Patient Management', 'Doctor Scheduling', 'Real-time Notifications', 'Admin Dashboard'],
      github: 'https://github.com/yourusername/health-appointment-system',
      demo: 'https://yourdemo.com/health-appointment-system'
    },
    {
      title: 'Finance Tracker App',
      description: 'A responsive finance tracker built with vanilla JavaScript. Track expenses, and total income.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      features: ['Expense Tracking', 'Budget Management'],
      github: 'https://github.com/madhugangwar/finance-tracker',
      demo: 'https://financetracker12.netlify.app/'
    },
    {
      title: 'React Weather App',
      description: 'Weather application built with React.js that provides current weather conditions and location-based weather data.',
      technologies: ['React.js', 'Weather API'],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      features: ['Current Weather'],
      github: 'https://github.com/madhugangwar/react-weather-app',
      demo: 'https://reactweatherapp23.netlify.app/'
    },
    {
      title: 'Period Tracker with Reminders',
      description: 'A comprehensive women\'s health tracking application with period prediction, symptom tracking, reminders, and health tips. Features calendar view and personalized insights.',
      technologies: ['React.js', 'Local Storage', 'Calendar API', 'Push Notifications'],
      icon: Calendar,
      color: 'from-purple-500 to-violet-500',
      features: ['Period Tracking', 'Symptom Logging', 'Smart Reminders', 'Health Tips'],
      github: 'https://github.com/madhugangwar/react-weather-app',
      demo: 'https://madhugangwar.github.io/Period-Tracker/'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${project.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>

                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Interested in seeing more of my work?
          </p>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
          >
            <span>Get In Touch</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
