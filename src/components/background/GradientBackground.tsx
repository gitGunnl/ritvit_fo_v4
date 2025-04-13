
import React, { useEffect, useRef } from 'react';

interface GradientBackgroundProps {
  colors?: string[];
  speed?: number;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  colors = ['#3b82f6', '#8b5cf6', '#ec4899'],
  speed = 0.02
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
    
    const drawGradient = () => {
      ctx.clearRect(0, 0, width, height);
      time += speed;
      
      // Create gradient
      const centerX = width / 2 + Math.cos(time) * width * 0.2;
      const centerY = height / 2 + Math.sin(time) * height * 0.2;
      
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, Math.max(width, height) * 0.7
      );
      
      // Add color stops
      colors.forEach((color, index) => {
        const offset = (index / (colors.length - 1)) + Math.sin(time + index) * 0.1;
        gradient.addColorStop(Math.max(0, Math.min(1, offset)), color);
      });
      
      // Fill with gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      requestAnimationFrame(drawGradient);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    drawGradient();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [colors, speed]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0 opacity-40"
    />
  );
};

export default GradientBackground;
