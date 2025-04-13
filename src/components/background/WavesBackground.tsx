
import React, { useEffect, useRef } from 'react';

interface WavesBackgroundProps {
  waveColors?: string[];
  speed?: number;
}

const WavesBackground: React.FC<WavesBackgroundProps> = ({
  waveColors = ['rgba(59, 130, 246, 0.3)', 'rgba(99, 102, 241, 0.2)', 'rgba(139, 92, 246, 0.1)'],
  speed = 0.5
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    let time = 0;
    
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    const drawWaves = () => {
      ctx.clearRect(0, 0, width, height);
      
      time += speed;
      
      waveColors.forEach((color, index) => {
        ctx.fillStyle = color;
        ctx.beginPath();
        
        const amplitude = 20 + index * 10;
        const frequency = 0.005 - index * 0.001;
        const yOffset = height * (0.5 + index * 0.1);
        
        ctx.moveTo(0, height);
        
        for (let x = 0; x <= width; x += 5) {
          const y = yOffset + Math.sin((x * frequency) + time) * amplitude;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.fill();
      });
      
      requestAnimationFrame(drawWaves);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    drawWaves();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [waveColors, speed]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default WavesBackground;
