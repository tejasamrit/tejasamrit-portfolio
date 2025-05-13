
import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!loading) return null;
  
  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center">
      <div className="retro-terminal p-8 bg-retro-dark border-2 border-retro-purple">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-retro-pink font-retro">SYSTEM LOADING</div>
        </div>
        
        <div className="w-64 h-2 bg-gray-700 rounded overflow-hidden mb-4">
          <div className="h-full bg-gradient-to-r from-retro-purple to-retro-pink animate-[pulse_2s_ease-in-out_infinite] loading-bar"></div>
        </div>
        
        <div className="font-mono text-sm text-green-400 typewriter">
          <span>$ Initializing system components...</span><br/>
          <span>$ Loading profile data...</span><br/>
          <span>$ Rendering retro interface...</span><br/>
          <span className="text-retro-pink">$ READY_</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
