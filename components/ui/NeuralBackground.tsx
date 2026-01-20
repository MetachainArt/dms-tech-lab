"use client";

import { useEffect, useRef } from "react";

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use container dimensions instead of window
    const updateSize = () => {
        const parent = canvas.parentElement;
        if (parent) {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        } else {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    };
    
    updateSize();
    window.addEventListener("resize", updateSize);

    // Mouse interactions
    const mouse = { x: -1000, y: -1000, radius: 250 }; // Increased radius

    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Configuration
    const particleCount = 60; // Slightly reduced count for cleaner look on smaller canvases, but effectively denser
    const connectionDistance = 150;
    const particles: Particle[] = [];
    
    // Colors - Brighter
    const colors = ["#00D1FF", "#A78BFA", "#FFFFFF"]; 

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 1.0; 
        this.vy = (Math.random() - 0.5) * 1.0;
        this.size = Math.random() * 3 + 2; // Min size 2, Max 5 (Larger)
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
        
        // Mouse Interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = mouse.radius;
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * force * 3; 
            const directionY = forceDirectionY * force * 3;
            
            this.x -= directionX;
            this.y -= directionY;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Initialize
    const initParticles = () => {
        particles.length = 0;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    };
    initParticles();
    
    // Re-init on resize to redistribute
    const handleResizeReinit = () => {
        updateSize();
        initParticles();
    }
    window.addEventListener("resize", handleResizeReinit);


    // Animation Loop
    const animate = () => {
        if (!ctx) return;
        
        // Clear with slight trail effect? No, clean clear for now.
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Lighter blend mode for glowing effect
        ctx.globalCompositeOperation = 'screen'; 

        particles.forEach((p, index) => {
            p.update();
            p.draw();

            // Connect
            for (let j = index + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    ctx.beginPath();
                    const opacity = 1 - (distance / connectionDistance);
                    ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.5})`; // Brighter lines
                    ctx.lineWidth = 1;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        });
        
        ctx.globalCompositeOperation = 'source-over'; // Reset
        requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", updateSize);
        window.removeEventListener("resize", handleResizeReinit);
        window.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-auto"
    />
  );
}

