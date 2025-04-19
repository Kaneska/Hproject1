'use client';

import { useEffect, useState } from 'react';
import { Star, GemIcon } from 'lucide-react';
import React from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  life: number;
  type: 'star' | 'crystal';
  rotation: number;
}

const COLORS = [
  '#FEF7CD', // soft gold
  '#FEC6A1', // soft orange
  '#FFDEE2', // soft pink
  '#FDE1D3', // soft peach
  '#E5DEFF', // soft purple
];

const CursorTrail: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    let particleCount = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const newParticle: Particle = {
        id: particleCount++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 12 + 8,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        life: 1,
        type: Math.random() > 0.5 ? 'star' : 'crystal',
        rotation: Math.random() * 360,
      };

      setParticles(prev => [...prev, newParticle]);
    };

    const animate = () => {
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            life: p.life - 0.02,
            rotation: p.rotation + 2,
          }))
          .filter(p => p.life > 0)
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
            opacity: p.life,
            filter: `blur(${(1 - p.life) * 2}px) brightness(1.5)`,
            transition: 'opacity 0.2s ease-out',
            color: p.color,
          }}
        >
          {p.type === 'star' ? (
            <Star
              size={p.size}
              fill={p.color}
              stroke={p.color}
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <GemIcon
              size={p.size}
              fill={p.color}
              stroke={p.color}
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CursorTrail;
