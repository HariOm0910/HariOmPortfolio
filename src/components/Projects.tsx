import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import binary from "./images/binary.jpg";  // Make sure you have this image in your project
import datascience from "./images/datascience.jpg"; 
import sudoku from "./images/sudoku.jpg"; // Correct typo: you had "sudocu.jpg"

interface ProjectProps {
  title: string;
  period: string;
  description: string[];
  technologies: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  period,
  description,
  technologies,
  image,
  liveLink,
  githubLink,
  index
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 * index }}
    className="project-card relative overflow-hidden rounded-lg shadow-lg bg-dark-800"
  >
    {/* Image with overlay */}
    <div className="relative h-[200px] z-0">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-80 pointer-events-none z-0"></div>
      <div className="absolute bottom-4 left-4 z-10">
        <span className="px-3 py-1 bg-primary-500 text-white text-xs rounded-full">{technologies}</span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 z-10 relative">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <span className="text-sm text-gray-400">{period}</span>
      </div>

      <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-2">
        {description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <div className="flex space-x-4">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <ExternalLink size={18} className="mr-1" />
            Live Demo
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Github size={18} className="mr-1" />
            GitHub
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Binary Tree Visualizer',
      period: 'Aug 2024',
      description: [
        'A web-based Binary Tree Visualizer that allows users to dynamically build and interact with a binary tree.',
        'Users input numeric values, and the application inserts them while maintaining binary tree hierarchy.',
      ],
      technologies: 'HTML, CSS, JavaScript',
      image: binary,
      githubLink: '', // Add GitHub link if available
      index: 1
    },
    {
      title: 'Car Sales Analysis',
      period: 'Sep 2024',
      description: [
        'Developed an interactive dashboard in Microsoft Excel to uncover insights from Kaggle car sales dataset.',
        'Used pivot tables, charts, and slicers for detailed exploration of sales trends and customer behavior.'
      ],
      technologies: 'Excel, Data Analysis',
      image: datascience,
      githubLink: '', // Add GitHub link if available
      index: 2
    },
    {
      title: 'Sudoku Solver',
      period: 'Oct 2024',
      description: [
        'Web-based Sudoku Solver built using HTML, CSS, and JavaScript.',
        'Uses backtracking algorithm to instantly solve 9x9 Sudoku puzzles entered by users.',
        'Responsive UI providing a smooth solving experience across devices.'
      ],
      technologies: 'HTML, CSS, JavaScript',
      image: sudoku,
      githubLink: '', // Add GitHub link if available
      index: 3
    },
  ];

  return (
    <section id="projects" className="py-20 relative bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-white mb-10"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
