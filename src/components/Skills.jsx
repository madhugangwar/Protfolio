import React, { useEffect, useState } from 'react';
import { Code, Database, GitBranch, Globe } from 'lucide-react';

const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateSkills(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 80 },
      ],
      color: 'from-purple-500 to-blue-500'
    },
    {
      title: 'Backend & Database',
      icon: Database,
      skills: [
        { name: 'DBMS', level: 75 },
        { name: 'SQL', level: 80 },
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 90 },
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Tools & Others',
      icon: Code,
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Responsive Design', level: 85 },
        { name: 'Problem Solving', level: 75 },
        { name: 'Team Collaboration', level: 70 },
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const SkillBar = ({ skill, delay }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-purple-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className={`bg-gradient-to-r from-purple-400 to-blue-400 h-2.5 rounded-full transition-all duration-1000 ease-out ${
            animateSkills ? '' : 'w-0'
          }`}
          style={{ 
            width: animateSkills ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
             Various technologies and tools that help me create amazing web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              {category.skills.map((skill, skillIndex) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  delay={categoryIndex * 200 + skillIndex * 100}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Additional Skills Icons */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'Git', 'GitHub', 'SQL', 'DBMS'].map((tech) => (
              <div 
                key={tech}
                className="bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-500/20 hover:border-purple-500/40 hover:scale-110 transition-all duration-300"
              >
                <span className="text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;