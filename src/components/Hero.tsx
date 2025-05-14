
import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen retro-grid flex items-center pt-16">
      <div className="retro-container">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="mb-6 md:mb-0 md:mr-8 relative">
            <div className="retro-profile-frame">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-retro-purple animate-pulse">
                <AvatarImage src="/lovable-uploads/cf203e7c-779a-4022-a3ce-593c6bfc6f23.png" alt="Tejas Amrit" className="object-cover" />
                <AvatarFallback className="bg-retro-dark text-retro-pink text-xl">TA</AvatarFallback>
              </Avatar>
              
              {/* Simple hexagonal outline styling */}
              <div className="absolute inset-0 w-full h-full transform rotate-45 border-2 border-retro-pink opacity-60"></div>
              <div className="absolute inset-0 w-full h-full transform -rotate-45 border-2 border-retro-purple opacity-60"></div>
            </div>
          </div>
          
          <div className="animate-fade-in flex-1">
            <div className="glitch-container mb-2">
              <p className="text-retro-pink font-medium">Hello, I'm</p>
            </div>
            <h1 className="font-retro text-3xl md:text-5xl lg:text-6xl mb-4 text-white">
              Tejas <span className="text-retro-purple">Amrit</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-retro-purple to-retro-pink rounded-full mb-6"></div>
            <div className="retro-terminal max-w-2xl p-4 mb-8 border-2 border-retro-pink bg-retro-dark/80 rounded-md">
              <div className="terminal-header flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="flex-1 text-center text-xs text-gray-400">terminal</div>
              </div>
              <p className="typewriter-text text-lg text-gray-300">
                <span className="text-retro-pink">$</span> A passionate full-stack developer with expertise in building responsive web applications.
                I specialize in creating seamless user experiences with modern web technologies.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
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
                href="https://drive.google.com/file/d/1kPVoAHQRrBe00VTcYdiFMoNWreGFPGfs/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="retro-button"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        
        {/* Retro grid decoration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/3 right-10 w-24 h-24 border-4 border-retro-pink animate-retro-glitch opacity-20"></div>
          <div className="absolute bottom-1/4 left-10 w-16 h-16 border-4 border-retro-purple animate-pulse opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
