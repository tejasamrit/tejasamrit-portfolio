
import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleLinkHoverIn = () => setLinkHovered(true);
    const handleLinkHoverOut = () => setLinkHovered(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', updatePosition);
    window.addEventListener('mouseleave', () => setHidden(true));
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverIn);
      link.addEventListener('mouseleave', handleLinkHoverOut);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseenter', updatePosition);
      window.removeEventListener('mouseleave', () => setHidden(true));
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverIn);
        link.removeEventListener('mouseleave', handleLinkHoverOut);
      });
    };
  }, []);

  // Simpler cursor styles
  const cursorStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    opacity: hidden ? 0 : 1,
    transform: `scale(${clicked ? 0.8 : linkHovered ? 1.5 : 1})`,
    transition: 'transform 0.2s ease-out, opacity 0.2s ease-out'
  };

  return (
    <div
      className="fixed pointer-events-none z-[9999] w-6 h-6 rounded-full border-2 border-retro-pink mix-blend-difference"
      style={cursorStyle}
    />
  );
};

export default Cursor;
