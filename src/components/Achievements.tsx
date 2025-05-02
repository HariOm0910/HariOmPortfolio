import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';


const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Competitive Programming
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Platforms */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-dark-700 p-6 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Code size={24} className="text-primary-500" />
              <h3 className="text-xl font-semibold">Coding Platforms</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-primary-500/20 p-2 rounded-lg mt-1">
                  <Code size={20} className="text-primary-500" />
                </div>
                <div>
                  <h4 className="font-medium">LeetCode</h4>
                  <p className="text-gray-400 text-sm">100+ problems solved</p>
                </div>
              </li>
              
             
              
              <li className="flex items-start gap-3">
                <div className="bg-primary-500/20 p-2 rounded-lg mt-1">
                  <Code size={20} className="text-primary-500" />
                </div>
                <div>
                  <h4 className="font-medium">GeekForGeeks</h4>
                  <p className="text-gray-400 text-sm">600+ questions solved</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-primary-500/20 p-2 rounded-lg mt-1">
                  <Code size={20} className="text-primary-500" />
                </div>
                <div>
                  <h4 className="font-medium">HackerRank</h4>
                  <p className="text-gray-400 text-sm">5-star problem solver</p>
                </div>
              </li>
            </ul>
          </motion.div>
          
          {/* Hackathons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-dark-700 p-6 rounded-xl"
          >
            
            
            
            
            <div className="p-4 bg-dark-600 rounded-lg border-l-4 border-primary-500">
              <h4 className="font-medium mb-2">Why Competitive Programming?</h4>
              <p className="text-gray-300 text-sm">
                Competitive programming strengthens problem-solving abilities, enhances algorithmic thinking, and improves coding efficiency. These skills are directly transferable to real-world software development challenges, enabling the creation of optimized, efficient solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;