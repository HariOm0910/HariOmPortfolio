import React from 'react';
import { motion } from 'framer-motion';
import { SiPython, SiCplusplus, SiR, SiMysql, SiGithub, SiTableau } from 'react-icons/si';
import { FaDatabase, FaCode, FaTools } from 'react-icons/fa';
import { GrCloudComputer } from 'react-icons/gr'; // for DBMS, OS, etc.
import { TbMathFunction } from 'react-icons/tb'; // for DS & Algo
import { FaJava } from 'react-icons/fa';
// Skill icon component
interface SkillProps {
  icon: React.ReactNode;
  name: string;
  delay?: number;
}

const SkillIcon: React.FC<SkillProps> = ({ icon, name, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="skill-icon flex flex-col items-center text-white"
  >
    {icon}
    <span className="mt-2 text-sm font-medium">{name}</span>
  </motion.div>
);

// Skill section component
interface SkillSectionProps {
  title: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; icon: React.ReactNode }>;
  delay?: number;
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, icon, skills, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="mb-10"
  >
    <div className="flex items-center gap-2 mb-4 text-primary-500">
      {icon}
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <SkillIcon
          key={skill.name}
          icon={skill.icon}
          name={skill.name}
          delay={delay + 0.1 * index}
        />
      ))}
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  const programmingLanguages = [
    { name: 'Java', icon: <FaJava size={32} /> },
    { name: 'Python', icon: <SiPython size={32} /> },
    { name: 'C++', icon: <SiCplusplus size={32} /> },
    { name: 'R', icon: <SiR size={32} /> },
    { name: 'SQL', icon: <SiMysql size={32} /> },
  ];

  const itConstructs = [
    { name: 'DBMS', icon: <FaDatabase size={32} /> },
    { name: 'DS & Algorithms', icon: <TbMathFunction size={32} /> },
    { name: 'OOP', icon: <FaCode size={32} /> },
    { name: 'OS', icon: <GrCloudComputer size={32} /> },
  ];

  const technologies = [
    { name: 'Tableau', icon: <SiTableau size={32} /> },
    { name: 'RStudio', icon: <SiR size={32} /> },
    { name: 'Predictive Analytics', icon: <FaTools size={32} /> },
    { name: 'Microsoft Excel', icon: <FaTools size={32} /> },
    { name: 'MySQL', icon: <SiMysql size={32} /> },
    { name: 'GitHub', icon: <SiGithub size={32} /> },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-10"
        >
          Skills & Tools
        </motion.h2>

        <SkillSection
          title="Programming Languages"
          icon={<FaCode size={24} />}
          skills={programmingLanguages}
          delay={0.1}
        />

        <SkillSection
          title="IT Constructs"
          icon={<GrCloudComputer size={24} />}
          skills={itConstructs}
          delay={0.2}
        />

        <SkillSection
          title="Technologies"
          icon={<FaTools size={24} />}
          skills={technologies}
          delay={0.3}
        />
      </div>
    </section>
  );
};

export default Skills;
