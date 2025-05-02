import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import dsaimage from './images/h1.jpg';
import nptelimage from './images/h2.jpg';
import htmlimage from './images/h3.jpg';
import udemyimage from './images/h4.jpg';
import linkedinimage from './images/h5.jpg';

interface CertificationProps {
  title: string;
  issuer: string;
  image: string;
  link: string;
  index: number;
}

const CertificateCard: React.FC<CertificationProps> = ({ title, issuer, image, link, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 * index }}
    className="certificate-card"
  >
    <div className="relative overflow-hidden h-[150px]">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-70"></div>
    </div>
    
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-400 text-sm mb-3">{issuer}</p>
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm"
      >
        <ExternalLink size={16} className="mr-1" />
        View Certificate
      </a>
    </div>
  </motion.div>
);

const Certifications: React.FC = () => {
  const certificates = [
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      image: linkedinimage,
      link: 'https://archive.nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc24-cs118',
      index: 0
    },
    
    {
      title: 'Data Analysis with Tableau',
      issuer: 'Coursera',
      image: nptelimage,
      link: 'https://www.coursera.org/account/accomplishments/verify/3LTXSUSEWHJ8',
      index: 1
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'Coursera',
      image: htmlimage,
      link: 'https://www.coursera.org/account/accomplishments/verify/6PIPJ8P8C71V',
      index: 2
    },
    {
      title: 'Complete Interview Preparation',
      issuer: 'GFG',
      image: udemyimage,
      link: 'https://www.geeksforgeeks.org/certificate/7892178f6dde8172ace44accf560fa4a',
      index: 3
    },
    {
      title: 'Excel Skills for Data Analytics and Visualization',
      issuer: 'Coursera',
      image: dsaimage,
      link: 'https://www.coursera.org/account/accomplishments/specialization/N7VJHCFJ4C9G',
      index: 4
    }
    
    
  ];

  return (
    <section id="certifications" className="py-20 bg-dark-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Certifications
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.title} {...certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;