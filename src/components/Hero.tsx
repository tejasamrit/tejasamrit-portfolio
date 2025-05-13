
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <section id="home" className="min-h-screen retro-grid flex items-center pt-16">
      <div className="retro-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <p className="text-retro-pink font-medium mb-2">Hello, I'm</p>
            <h1 className="font-retro text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
              Tejas <span className="text-retro-purple">Amrit</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-retro-purple to-retro-pink rounded-full mb-4"></div>
            <p className="text-lg max-w-xl text-gray-300 mb-6">
              A passionate full-stack developer with expertise in building responsive web applications. 
              I specialize in creating seamless user experiences with modern web technologies.
            </p>
            <div className="flex space-x-4">
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
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-retro-purple to-retro-pink rounded-2xl blur-[40px] opacity-30 animate-pulse"></div>
              <div className="relative border-4 border-retro-pink rounded-2xl p-1 bg-card overflow-hidden">
                <img 
                  ref={imageRef}
                  src="/lovable-uploads/56d895dd-e615-406e-982b-abfd8d266086.png" 
                  alt="Tejas Amrit" 
                  className="w-64 h-64 object-cover rounded-xl pixelated-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-retro-dark/80 to-transparent"></div>
                <div className="scanline"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
