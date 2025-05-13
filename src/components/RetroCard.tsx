
import React from 'react';
import { cn } from '@/lib/utils';

interface RetroCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowBorder?: boolean;
  className?: string;
}

const RetroCard = ({ children, glowBorder = false, className, ...props }: RetroCardProps) => {
  return (
    <div 
      className={cn(
        "retro-card animate-fade-in", 
        glowBorder && "glowing-border", 
        className
      )} 
      {...props}
    >
      <div className="scanline"></div>
      {children}
    </div>
  );
};

export default RetroCard;
