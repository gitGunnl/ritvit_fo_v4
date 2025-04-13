
import React, { useEffect, useRef } from 'react';

interface Bubble {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
}

interface BubblesBackgroundProps {
  bubbleColor?: string;
  bubbleCount?: number;
}

const BubblesBackground: React.FC<BubblesBackgroundProps> = ({
  bubbleColor = 'rgba(99, 102, 241, 0.6)',
  bubbleCount = 30
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initBubbles();
    };
    
    const initBubbles = () => {
      bubblesRef.current = [];
      for (let i = 0; i < bubbleCount; i++) {
        bubblesRef.current.push({
          x: Math.random() * width,
          y: height + Math.random() * 100,
          radius: Math.random() * 50 + 10,
          opacity: Math.random() * 0.5 + 0.1,
          speed: Math.random() * 2 + 0.5
        });
      }
    };
    
    const drawBubbles = () => {
      ctx.clearRect(0, 0, width, height);
      
      bubblesRef.current.forEach((bubble, index) => {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = bubbleColor.replace(')', `, ${bubble.opacity})`);
        ctx.fill();
        
        // Move bubble up
        bubble.y -= bubble.speed;
        
        // Reset if offscreen
        if (bubble.y + bubble.radius < 0) {
          bubble.y = height + bubble.radius;
          bubble.x = Math.random() * width;
        }
      });
      
      requestAnimationFrame(drawBubbles);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    drawBubbles();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [bubbleColor, bubbleCount]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default BubblesBackground;
