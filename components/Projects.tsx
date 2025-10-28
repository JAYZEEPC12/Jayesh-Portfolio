
import React from 'react';
import type { Project } from '../types';
import Section from './Section';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const projects: Project[] = [
  {
    title: 'Project Alpha',
    description: 'A full-stack web application for project management, featuring real-time collaboration, task tracking, and user authentication.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    imageUrl: 'https://picsum.photos/seed/alpha/600/400',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Project Beta',
    description: 'An e-commerce platform with a custom CMS, Stripe integration for payments, and a responsive design for a seamless shopping experience.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'GraphQL', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/beta/600/400',
    githubUrl: '#',
    liveUrl: '#',
  },
    {
    title: 'Project Gamma',
    description: 'A data visualization dashboard that consumes a third-party API to display complex financial data in an intuitive and interactive way.',
    technologies: ['Vue.js', 'D3.js', 'Tailwind CSS', 'Firebase'],
    imageUrl: 'https://picsum.photos/seed/gamma/600/400',
    githubUrl: '#',
  },
    {
    title: 'Project Delta',
    description: 'A mobile-first progressive web app (PWA) for local event discovery, featuring geolocation and offline capabilities.',
    technologies: ['React', 'PWA', 'Leaflet.js', 'Netlify'],
    imageUrl: 'https://picsum.photos/seed/delta/600/400',
    liveUrl: '#',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group bg-light-navy rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/40 transition-colors duration-300"></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold text-lightest-slate group-hover:text-green transition-colors duration-300">{project.title}</h3>
            <div className="flex items-center space-x-4">
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green"><GitHubIcon /></a>}
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green"><ExternalLinkIcon /></a>}
            </div>
        </div>
        <p className="text-slate mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span key={i} className="text-green text-xs font-mono">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Things I've Built">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
