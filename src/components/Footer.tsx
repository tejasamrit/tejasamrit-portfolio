
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-retro-dark border-t border-retro-purple/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4">
            <a href="#home" className="font-retro text-md text-retro-pink">
              <span className="text-retro-purple">&lt;</span>
              <span className="gradient-text">Tejas</span>
              <span className="text-retro-purple">/&gt;</span>
            </a>
          </div>
          
          <div className="flex space-x-6 mb-4">
            <a 
              href="https://github.com/tejasamrit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-retro-pink transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/tejas-amrit-0104b9227/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-retro-pink transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://leetcode.com/u/_amrit_tejas_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-retro-pink transition-colors"
            >
              LeetCode
            </a>
            <a 
              href="https://www.geeksforgeeks.org/user/amritpraceli5/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-retro-pink transition-colors"
            >
              GeeksforGeeks
            </a>
          </div>
          
          <div className="text-gray-500 text-sm">
            © {year} Tejas Amrit. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
