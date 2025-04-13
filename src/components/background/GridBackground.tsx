
import React, { useEffect, useRef } from 'react';

interface GridBackgroundProps {
  lineColor?: string;
  density?: number;
  speed?: number;
}

const GridBackground: React.FC<GridBackgroundProps> = ({
  lineColor = 'rgba(59, 130, 246, 0.2)',
  density = 30,
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
    
    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      
      time += speed;
      const cellSize = width / density;
      
      // Draw vertical lines
      for (let x = 0; x <= width; x += cellSize) {
        const waveOffset = Math.sin(time * 0.05 + x * 0.01) * 5;
        
        ctx.beginPath();
        ctx.moveTo(x + waveOffset, 0);
        ctx.lineTo(x - waveOffset, height);
        ctx.stroke();
      }
      
      // Draw horizontal lines
      for (let y = 0; y <= height; y += cellSize) {
        const waveOffset = Math.cos(time * 0.05 + y * 0.01) * 5;
        
        ctx.beginPath();
        ctx.moveTo(0, y + waveOffset);
        ctx.lineTo(width, y - waveOffset);
        ctx.stroke();
      }
      
      requestAnimationFrame(drawGrid);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    drawGrid();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [lineColor, density, speed]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default GridBackground;
