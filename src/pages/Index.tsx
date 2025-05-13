
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import Loader from '@/components/Loader';

const Index = () => {
  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Numbers 1-6 for navigation (removed education)
      if (e.key >= '1' && e.key <= '6') {
        const sectionIndex = parseInt(e.key) - 1;
        const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
        
        if (sectionIndex >= 0 && sectionIndex < sections.length) {
          const sectionId = sections[sectionIndex];
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="retro-gradient min-h-screen">
      <Loader />
      <Cursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
