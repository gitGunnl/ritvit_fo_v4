
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

interface ParticlesBackgroundProps {
  particleCount?: number;
  particleColors?: string[];
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({
  particleCount = 50,
  particleColors = ['#3b82f6', '#6366f1', '#8b5cf6', '#ec4899', '#f97316']
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 1,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
          color: particleColors[Math.floor(Math.random() * particleColors.length)]
        });
      }
    };
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX *= -1;
        }
        
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY *= -1;
        }
      });
      
      requestAnimationFrame(drawParticles);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    drawParticles();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [particleCount, particleColors]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default ParticlesBackground;
