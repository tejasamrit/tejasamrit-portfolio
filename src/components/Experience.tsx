
import React from 'react';
import RetroCard from './RetroCard';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <RetroCard className="mb-8">
    <div className="mb-4">
      <h3 className="text-xl font-bold text-retro-pink">{experience.title}</h3>
      <div className="flex flex-wrap items-center gap-2 mt-1">
        <span className="text-white font-medium">{experience.company}</span>
        <span className="text-gray-400 text-sm">• {experience.location}</span>
      </div>
      <p className="text-retro-purple text-sm mt-1">{experience.period}</p>
    </div>
    <ul className="list-disc pl-5 space-y-2">
      {experience.description.map((point, index) => (
        <li key={index} className="text-gray-300">{point}</li>
      ))}
    </ul>
  </RetroCard>
);

const Experience = () => {
  const experiences: Experience[] = [
    {
      title: "Software Developer Intern",
      company: "Demo Company",
      location: "Remote",
      period: "Jan 2025 – Apr 2025",
      description: [
        "Collaborated with development team on full-stack application features",
        "Implemented responsive UI components using React and Tailwind CSS",
        "Contributed to RESTful API development with Node.js and Express",
        "Participated in code reviews and agile development processes"
      ]
    },
    {
      title: "Web Developer Intern",
      company: "Test Yantra Software Solutions",
      location: "Pune, Maharashtra",
      period: "June 2024 – Nov 2024",
      description: [
        "Developed and debugged front-end features using HTML, CSS, JS",
        "Optimized site performance and ensured cross-browser compatibility"
      ]
    },
    {
      title: "DSA Content Creator",
      company: "GeeksforGeeks",
      location: "Remote",
      period: "Sept 2023 – Nov 2023",
      description: [
        "Created educational videos on core DSA topics like Arrays, Strings, LinkedList, Stack, etc.",
        "Helped over 5000+ learners via detailed explanations in Java and C"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 retro-grid">
      <div className="retro-container">
        <h2 className="retro-heading text-center mb-12">Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
