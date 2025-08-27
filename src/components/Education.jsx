import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Invertis University',
      year: '2022 - 2025',
      status: 'Graduate',
      description: 'BCA G with focus on software development, web technologies, and computer science fundamentals.',
      icon: GraduationCap,
      color: 'from-purple-500 to-blue-500'
    },
    {
      degree: 'Class XII (Higher Secondary)',
      institution: 'Secondary Education Board',
      year: '2022',
      status: '79.65%',
      description: 'Completed higher secondary education with excellent academic performance.',
      icon: Award,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      degree: 'Class X (Secondary)',
      institution: 'Secondary Education Board',
      year: '2020',
      status: '79.6%',
      description: 'Completed secondary education with strong academic foundation.',
      icon: Award,
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My educational journey that shaped my passion for technology and development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-400 to-blue-400"></div>

          {educationData.map((edu, index) => (
            <div key={edu.degree} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'flex-row-reverse' : ''
            }`}>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full border-4 border-slate-900 z-10"></div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${edu.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <edu.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-purple-400 font-semibold">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 text-gray-300">
                    <Calendar size={16} className="mr-2" />
                    <span>{edu.year}</span>
                    <span className="ml-4 px-3 py-1 bg-gradient-to-r from-green-600/20 to-emerald-600/20 text-green-400 rounded-full text-sm border border-green-500/30">
                      {edu.status}
                    </span>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Academic Achievements */}
        <div className="mt-16 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Academic Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h4 className="text-white font-semibold mb-2">Consistent Performance</h4>
              <p className="text-gray-300 text-sm">Maintained excellent academic performance throughout my educational journey</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h4 className="text-white font-semibold mb-2">Strong Foundation</h4>
              <p className="text-gray-300 text-sm">Built a solid foundation in  science, and computer applications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-white" size={32} />
              </div>
              <h4 className="text-white font-semibold mb-2">Current Focus</h4>
              <p className="text-gray-300 text-sm">Specializing in software development and modern web technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;