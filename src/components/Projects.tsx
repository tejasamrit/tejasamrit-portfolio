
import React from 'react';
import RetroCard from './RetroCard';
import { Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  imageUrl: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <RetroCard className="h-full flex flex-col">
    <div className="mb-4 overflow-hidden rounded border-2 border-retro-purple/30">
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
      />
    </div>
    <h3 className="text-xl font-bold text-retro-pink mb-2">{project.title}</h3>
    <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
    <div className="mb-4">
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, index) => (
          <span 
            key={index} 
            className="px-2 py-1 text-xs bg-retro-purple/20 border border-retro-purple text-white rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="retro-button text-center w-full"
    >
      View Project
    </a>
  </RetroCard>
);

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Airbnb Clone",
      description: "A full-stack Airbnb clone with features like property listings, booking system, and user authentication. Implements responsive design and modern UI components.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "REST API"],
      link: "https://github.com/tejasamrit/Airbnb_Clone",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    },
    {
      title: "Exercise Finder App",
      description: "A web application that helps users find exercises based on muscle groups, equipment, and difficulty levels. Includes demonstration videos and detailed instructions.",
      techStack: ["React", "CSS", "JavaScript", "REST API"],
      link: "https://github.com/tejasamrit/Exercise_Finder_App",
      imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
    },
    {
      title: "Recipe Finder App",
      description: "An interactive recipe finder that allows users to search for recipes by ingredients, cuisine type, or dietary restrictions. Features saved favorites and step-by-step cooking instructions.",
      techStack: ["React", "Node.js", "API Integration", "CSS"],
      link: "https://github.com/tejasamrit/Recipe_Finder_App",
      imageUrl: "https://images.unsplash.com/photo-1466637574441-749b8f19452f"
    },
    {
      title: "BookDroid",
      description: "An innovative Android application to facilitate the buying and selling of old books, making it especially helpful for students seeking affordable study materials.",
      techStack: ["Java", "Android", "Firebase", "UI/UX Design"],
      link: "https://github.com/tejasamrit/BookDroid",
      imageUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
    }
  ];

  return (
    <section id="projects" className="py-10 retro-grid">
      <div className="retro-container">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <a 
            href="https://github.com/tejasamrit" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="retro-button text-center px-6 py-3 flex items-center gap-2"
          >
            <Github size={20} />
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
