
import React from 'react';
import RetroCard from './RetroCard';

const Education = () => {
  return (
    <section id="education" className="py-16 retro-grid">
      <div className="retro-container">
        <h2 className="retro-heading text-center mb-12">Education</h2>
        
        <RetroCard className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-retro-pink">Bachelor of Technology</h3>
              <p className="text-white mt-1">Government College of Engineering, Nagpur</p>
              <p className="text-retro-purple text-sm mt-1">2020 - 2024</p>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex flex-wrap gap-4 mt-4">
              <a 
                href="https://leetcode.com/u/_amrit_tejas_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-retro-purple/20 text-white rounded-md hover:bg-retro-pink/20 transition-colors duration-300"
              >
                LeetCode
              </a>
              <a 
                href="https://www.geeksforgeeks.org/user/amritpraceli5/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-retro-purple/20 text-white rounded-md hover:bg-retro-pink/20 transition-colors duration-300"
              >
                GeeksforGeeks
              </a>
              <a 
                href="https://codolio.com/profile/tejasamrit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-retro-purple/20 text-white rounded-md hover:bg-retro-pink/20 transition-colors duration-300"
              >
                Codolio
              </a>
            </div>
          </div>
        </RetroCard>
      </div>
    </section>
  );
};

export default Education;
