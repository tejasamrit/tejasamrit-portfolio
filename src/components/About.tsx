
import React from 'react';
import RetroCard from './RetroCard';

const About = () => {
  return (
    <section id="about" className="py-16 retro-grid">
      <div className="retro-container">
        <h2 className="text-3xl font-retro text-white text-center mb-12">About Me</h2>
        
        <RetroCard glowBorder className="max-w-4xl mx-auto">
          <p className="text-gray-300 mb-4">
            I'm a passionate full-stack developer and recent B.Tech graduate from Government College of Engineering Nagpur (2020-2024). My journey in software development has been driven by a love for creating applications that solve real-world problems.
          </p>
          
          <p className="text-gray-300 mb-4">
            I specialize in building responsive and interactive web applications using modern technologies such as React, Node.js, and MongoDB. My strong foundation in data structures and algorithms enhances my ability to write efficient and optimized code.
          </p>
          
          <p className="text-gray-300">
            When I'm not coding, I'm continuously expanding my skills by exploring new technologies, contributing to open-source projects, and solving algorithmic challenges on platforms like LeetCode and GeeksforGeeks.
          </p>
          
          <div className="mt-6 flex flex-wrap gap-4">
            <a 
              href="https://github.com/tejasamrit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="retro-button"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/tejas-amrit-0104b9227/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="retro-button"
            >
              LinkedIn
            </a>
            <a 
              href="https://leetcode.com/u/_amrit_tejas_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="retro-button"
            >
              LeetCode
            </a>
            <a 
              href="https://www.geeksforgeeks.org/user/amritpraceli5/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="retro-button"
            >
              GeeksforGeeks
            </a>
            <a 
              href="https://codolio.com/profile/tejasamrit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="retro-button"
            >
              Codolio
            </a>
          </div>
        </RetroCard>
      </div>
    </section>
  );
};

export default About;
