"use client";

import { useEffect, useRef, useCallback } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  pulsePhase: number;
  pulseSpeed: number;
  layer: number;
}

interface Connection {
  from: number;
  to: number;
  strength: number;
  pulseOffset: number;
}

interface EnergyTrail {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  progress: number;
  speed: number;
  color: string;
  fromNode: number;
  toNode: number;
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const trailsRef = useRef<EnergyTrail[]>([]);
  const timeRef = useRef(0);

  const colors = {
    primary: "#00D1FF",    // Cyan
    secondary: "#A78BFA",  // Purple
    tertiary: "#3B82F6",   // Blue
    accent: "#06B6D4",     // Teal
    white: "#FFFFFF",
  };

  const initializeNetwork = useCallback((width: number, height: number) => {
    const nodes: Node[] = [];
    const connections: Connection[] = [];

    // Create nodes in a more organic neural pattern
    const nodeCount = Math.min(80, Math.floor((width * height) / 15000));
    const layers = 4;

    for (let i = 0; i < nodeCount; i++) {
      const layer = Math.floor(Math.random() * layers);
      const colorOptions = [colors.primary, colors.secondary, colors.tertiary, colors.accent];

      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1.5,
        color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        layer,
      });
    }

    // Create connections based on proximity and layer
    const connectionDistance = Math.min(width, height) * 0.2;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance && Math.random() > 0.6) {
          connections.push({
            from: i,
            to: j,
            strength: 1 - distance / connectionDistance,
            pulseOffset: Math.random() * Math.PI * 2,
          });
        }
      }
    }

    nodesRef.current = nodes;
    connectionsRef.current = connections;
    trailsRef.current = [];
  }, []);

  const spawnEnergyTrail = useCallback(() => {
    const nodes = nodesRef.current;
    const connections = connectionsRef.current;

    if (connections.length === 0 || Math.random() > 0.1) return;

    const conn = connections[Math.floor(Math.random() * connections.length)];
    const fromNode = nodes[conn.from];
    const toNode = nodes[conn.to];

    if (!fromNode || !toNode) return;

    const colorOptions = [colors.primary, colors.secondary, colors.accent];

    trailsRef.current.push({
      x: fromNode.x,
      y: fromNode.y,
      targetX: toNode.x,
      targetY: toNode.y,
      progress: 0,
      speed: 0.015 + Math.random() * 0.02,
      color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
      fromNode: conn.from,
      toNode: conn.to,
    });

    // Keep trails manageable
    if (trailsRef.current.length > 30) {
      trailsRef.current = trailsRef.current.slice(-25);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateSize = () => {
      const parent = canvas.parentElement;
      const dpr = window.devicePixelRatio || 1;

      if (parent) {
        canvas.width = parent.clientWidth * dpr;
        canvas.height = parent.clientHeight * dpr;
        canvas.style.width = `${parent.clientWidth}px`;
        canvas.style.height = `${parent.clientHeight}px`;
        ctx.scale(dpr, dpr);
      }

      initializeNetwork(canvas.width / dpr, canvas.height / dpr);
    };

    updateSize();

    const handleResize = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      updateSize();
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const drawGlowingNode = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      radius: number,
      color: string,
      intensity: number
    ) => {
      // Outer glow
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 4);
      gradient.addColorStop(0, color);
      gradient.addColorStop(0.3, color + "80");
      gradient.addColorStop(0.6, color + "20");
      gradient.addColorStop(1, "transparent");

      ctx.beginPath();
      ctx.arc(x, y, radius * 4, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.globalAlpha = intensity * 0.5;
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = intensity;
      ctx.fill();

      // Bright center
      ctx.beginPath();
      ctx.arc(x, y, radius * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = colors.white;
      ctx.globalAlpha = intensity * 0.8;
      ctx.fill();

      ctx.globalAlpha = 1;
    };

    const drawConnection = (
      ctx: CanvasRenderingContext2D,
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      strength: number,
      pulseValue: number,
      color: string
    ) => {
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
      const alpha = strength * pulseValue * 0.4;

      gradient.addColorStop(0, color + Math.floor(alpha * 255).toString(16).padStart(2, "0"));
      gradient.addColorStop(0.5, color + Math.floor(alpha * 255 * 1.2).toString(16).padStart(2, "0"));
      gradient.addColorStop(1, color + Math.floor(alpha * 255).toString(16).padStart(2, "0"));

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = strength * 1.5;
      ctx.stroke();
    };

    const drawEnergyTrail = (
      ctx: CanvasRenderingContext2D,
      trail: EnergyTrail
    ) => {
      const nodes = nodesRef.current;
      const fromNode = nodes[trail.fromNode];
      const toNode = nodes[trail.toNode];

      if (!fromNode || !toNode) return;

      // Update positions to follow moving nodes
      const currentX = fromNode.x + (toNode.x - fromNode.x) * trail.progress;
      const currentY = fromNode.y + (toNode.y - fromNode.y) * trail.progress;

      // Trail head glow
      const gradient = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, 12);
      gradient.addColorStop(0, trail.color);
      gradient.addColorStop(0.4, trail.color + "60");
      gradient.addColorStop(1, "transparent");

      ctx.beginPath();
      ctx.arc(currentX, currentY, 12, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Trail core
      ctx.beginPath();
      ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
      ctx.fillStyle = colors.white;
      ctx.fill();
    };

    const animate = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.clearRect(0, 0, width, height);

      timeRef.current += 0.016;
      const time = timeRef.current;
      const mouse = mouseRef.current;
      const nodes = nodesRef.current;
      const connections = connectionsRef.current;
      const trails = trailsRef.current;

      // Update and draw connections first (behind nodes)
      ctx.globalCompositeOperation = "lighter";

      connections.forEach((conn) => {
        const fromNode = nodes[conn.from];
        const toNode = nodes[conn.to];

        if (!fromNode || !toNode) return;

        const dx = fromNode.x - toNode.x;
        const dy = fromNode.y - toNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDist = Math.min(width, height) * 0.25;

        if (distance < maxDist) {
          const pulseValue = 0.5 + 0.5 * Math.sin(time * 2 + conn.pulseOffset);
          const dynamicStrength = (1 - distance / maxDist) * conn.strength;

          drawConnection(
            ctx,
            fromNode.x,
            fromNode.y,
            toNode.x,
            toNode.y,
            dynamicStrength,
            pulseValue,
            fromNode.color
          );
        }
      });

      // Update and draw energy trails
      trails.forEach((trail, index) => {
        trail.progress += trail.speed;

        if (trail.progress >= 1) {
          trails.splice(index, 1);
        } else {
          drawEnergyTrail(ctx, trail);
        }
      });

      // Spawn new trails
      spawnEnergyTrail();

      // Update and draw nodes
      nodes.forEach((node) => {
        // Movement
        node.x += node.vx;
        node.y += node.vy;

        // Soft boundary bounce
        const margin = 50;
        if (node.x < margin) node.vx += 0.02;
        if (node.x > width - margin) node.vx -= 0.02;
        if (node.y < margin) node.vy += 0.02;
        if (node.y > height - margin) node.vy -= 0.02;

        // Damping
        node.vx *= 0.99;
        node.vy *= 0.99;

        // Mouse interaction
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const mouseRadius = 200;

        if (distance < mouseRadius && distance > 0) {
          const force = (mouseRadius - distance) / mouseRadius;
          const angle = Math.atan2(dy, dx);

          // Attract slightly, then repel very close
          if (distance > 50) {
            node.vx += Math.cos(angle) * force * 0.02;
            node.vy += Math.sin(angle) * force * 0.02;
          } else {
            node.vx -= Math.cos(angle) * force * 0.05;
            node.vy -= Math.sin(angle) * force * 0.05;
          }
        }

        // Pulse animation
        node.pulsePhase += node.pulseSpeed;
        const pulseIntensity = 0.6 + 0.4 * Math.sin(node.pulsePhase);

        drawGlowingNode(
          ctx,
          node.x,
          node.y,
          node.radius * (0.8 + pulseIntensity * 0.4),
          node.color,
          pulseIntensity
        );
      });

      // Draw subtle ambient glow in center
      const centerGradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.4
      );
      centerGradient.addColorStop(0, colors.primary + "08");
      centerGradient.addColorStop(0.5, colors.secondary + "04");
      centerGradient.addColorStop(1, "transparent");

      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = centerGradient;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "source-over";

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [initializeNetwork, spawnEnergyTrail]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ background: "transparent" }}
    />
  );
}
