
import React from 'react';
import RetroCard from './RetroCard';

const SkillCategory = ({ title, skills }: { title: string, skills: string[] }) => (
  <div className="mb-6">
    <h3 className="retro-subheading mb-3 text-retro-pink">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span 
          key={index} 
          className="px-3 py-1 bg-retro-purple/20 border border-retro-purple text-white rounded-md hover:bg-retro-pink/20 hover:border-retro-pink transition-colors duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "ReactJS"];
  const backendSkills = ["NodeJS", "Express", "MongoDB", "MySQL", "REST API"];
  const otherSkills = ["GitHub", "Figma", "VSCode"];
  const coursework = ["Object Oriented Programming", "Computer Network", "Data Structure and Algorithm", "DBMS"];

  return (
    <section id="skills" className="py-10 retro-grid">
      <div className="retro-container">
        <h2 className="section-heading">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RetroCard>
            <SkillCategory title="Frontend Development" skills={frontendSkills} />
            <SkillCategory title="Backend Development" skills={backendSkills} />
          </RetroCard>
          
          <RetroCard>
            <SkillCategory title="Tools & Technologies" skills={otherSkills} />
            <SkillCategory title="Coursework" skills={coursework} />
          </RetroCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
