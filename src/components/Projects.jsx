import React from 'react';
import { ExternalLink, Github, Calendar, Heart, DollarSign, Cloud } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
  title: 'Health-bites',
  description: 'A health-focused web app offering meal planning, healthy recipes, calorie tracking with graphs, and wellness articles.',
  technologies: ['React.js', 'Bootsrap', 'CSS', 'Local Storage'],
  icon: Heart,
  color: 'from-red-500 to-pink-500',
  features: ['Meal Planner', 'Recipes', 'Calorie Calculator (Bar Graphs)', 'Health Articles'],
  github: 'https://github.com/madhugangwar/Health-bites',
},
{
  title: 'Expenses Tracker',
  description: 'A responsive expense management app to track income, spending, and budgets with visual reports.',
  technologies: ['React.js', 'CSS3', 'LocalStorage'],
  icon: DollarSign,
  color: 'from-green-500 to-emerald-500',
  features: ['Expense Tracking', 'Budget Management', 'Interactive Bar Graphs'],
  github: 'https://github.com/madhugangwar/Expenses-tracker',
},
{
  title: 'Personal Portfolio',
  description: 'A personal portfolio website to showcase projects, skills, and achievements with a clean, responsive design.',
  technologies: ['React.js', 'TailWind css', 'CSS'],
  icon: Cloud,
  color: 'from-blue-500 to-cyan-500',
  features: ['Project Showcase', 'Responsive UI', 'Modern Design'],
  github: 'https://github.com/madhugangwar/Protfolio',
},
{
  title: 'Period Tracker with Reminders',
  description: 'A women’s health tracking app for period prediction, symptom logging, smart reminders, and personalized health tips.',
  technologies: ['React.js', 'Local Storage', 'Calendar API', 'Push Notifications'],
  icon: Calendar,
  color: 'from-purple-500 to-violet-500',
  features: ['Period Tracking', 'Symptom Logging', 'Smart Reminders', 'Health Tips'],
  github: 'https://github.com/madhugangwar/Period-Tracker',
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

               {/* 
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a> */}
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
