
import React from 'react';
import RetroCard from './RetroCard';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-10 retro-grid">
      <div className="retro-container">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto">
          <RetroCard glowBorder>
            <div className="text-center mb-8">
              <p className="text-gray-300 max-w-2xl mx-auto">
                Feel free to reach out to me for any opportunities, collaborations, or just to say hello!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a 
                href="mailto:amritpravelli5@gmail.com" 
                className="flex flex-col items-center p-4 bg-retro-purple/10 rounded-lg hover:bg-retro-pink/10 transition-colors duration-300"
              >
                <Mail className="text-retro-pink mb-2" size={32} />
                <span className="text-white font-medium">Email</span>
                <span className="text-gray-400 text-sm mt-1">amritpravelli5@gmail.com</span>
              </a>
              
              <a 
                href="https://github.com/tejasamrit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-retro-purple/10 rounded-lg hover:bg-retro-pink/10 transition-colors duration-300"
              >
                <Github className="text-retro-pink mb-2" size={32} />
                <span className="text-white font-medium">GitHub</span>
                <span className="text-gray-400 text-sm mt-1">@tejasamrit</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/tejas-amrit-0104b9227/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-retro-purple/10 rounded-lg hover:bg-retro-pink/10 transition-colors duration-300"
              >
                <Linkedin className="text-retro-pink mb-2" size={32} />
                <span className="text-white font-medium">LinkedIn</span>
                <span className="text-gray-400 text-sm mt-1">tejas-amrit</span>
              </a>
            </div>
            
            <div className="mt-10 text-center">
              <a 
                href="https://drive.google.com/file/d/1kPVoAHQRrBe00VTcYdiFMoNWreGFPGfs/view"
                target="_blank" 
                rel="noopener noreferrer"
                className="retro-button inline-flex"
              >
                View Resume
              </a>
            </div>
          </RetroCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
