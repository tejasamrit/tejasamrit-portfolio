
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="font-retro text-md md:text-lg text-retro-pink">
              <span className="text-retro-purple">&lt;</span>
              <span className="gradient-text">Tejas</span>
              <span className="text-retro-purple">/&gt;</span>
            </a>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="retro-nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg">
          <div className="px-4 py-5 border-t border-retro-purple/30">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="block px-4 py-2 text-base font-medium text-white hover:text-retro-pink hover:bg-retro-purple/10 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
