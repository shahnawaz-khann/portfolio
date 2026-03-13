import { useEffect, useRef } from 'react';
import './AnimatedSpaceBackground.css';

const AnimatedSpaceBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const lastFrameTime = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas size to viewport only (not full document)
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    
    // Throttled resize listener
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };
    
    window.addEventListener('resize', handleResize);

    // Simplified particle system with fewer particles
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = -10;
        this.speed = Math.random() * 0.3 + 0.1;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.size = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.y += this.speed;
        
        if (this.y > height + 10) {
          this.reset();
        }
      }

      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#ffffff';
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Reduced particle count for better performance
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(50, width / 20); // Reduced from 150
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    initParticles();

    // Simplified animation loop with frame rate limiting
    const animate = (currentTime) => {
      // Limit to ~30 FPS for better performance
      if (currentTime - lastFrameTime.current < 33) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastFrameTime.current = currentTime;

      // Clear canvas
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles only
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="space-background-canvas"
      />
      <div className="space-background-overlay" />
    </>
  );
};

export default AnimatedSpaceBackground;