
import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    
    if (loading) {
      progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + Math.floor(Math.random() * 10);
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 150);
    }
    
    const timer = setTimeout(() => {
      clearInterval(progressInterval);
      setLoading(false);
    }, 2500);
    
    return () => {
      clearTimeout(timer);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [loading]);
  
  if (!loading) return null;
  
  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center">
      <div className="retro-loader">
        <div className="retro-loader-content relative">
          <div className="retro-loader-avatar mb-6">
            <div className="w-24 h-24 mx-auto rounded-full border-4 border-retro-pink overflow-hidden">
              <img 
                src="/lovable-uploads/fc485850-110e-43d4-a021-3f1927ed1e0a.png" 
                alt="Tejas Amrit" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="text-center mb-4">
            <h2 className="text-xl font-retro text-retro-pink">System Boot</h2>
            <p className="text-sm text-gray-400 mt-1">Initializing Portfolio</p>
          </div>
          
          <div className="w-64 h-4 bg-gray-800 border border-retro-purple rounded-sm overflow-hidden mb-2">
            <div 
              className="h-full bg-gradient-to-r from-retro-purple to-retro-pink transition-all duration-150 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="text-right text-xs text-retro-pink font-mono">
            {progress}%
          </div>
          
          <div className="mt-4 font-mono text-xs text-green-400 max-w-xs mx-auto">
            {progress < 30 && <div>$ Initializing system components...</div>}
            {progress >= 30 && progress < 60 && <div>$ Loading profile data...</div>}
            {progress >= 60 && progress < 90 && <div>$ Rendering interface...</div>}
            {progress >= 90 && <div className="text-retro-pink">$ READY_</div>}
          </div>
          
          <div className="retro-loader-scanlines"></div>
          <div className="retro-loader-flicker"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
