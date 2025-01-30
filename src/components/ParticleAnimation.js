import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const ParticleAnimation = ({ className = "" }) => {
  const [particles, setParticles] = useState([]);
  const particlesRef = useRef([]);
  const secref = useRef(null);
  const inView = useInView(secref);

  const randomPosition = useCallback(() => {
    const angle = Math.random() * Math.PI * 2;
    const radius = 50 + Math.random() * 150;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  }, []);

  const createParticle = useCallback(
    () => ({
      id: crypto.randomUUID(), // More efficient unique ID
      ...randomPosition(),
      timestamp: Date.now(),
    }),
    [randomPosition]
  );

  useEffect(() => {
    let animationFrame;

    if (inView) {
      const updateParticles = () => {
        const now = Date.now();

        // Remove old particles
        particlesRef.current = particlesRef.current.filter(
          (p) => now - p.timestamp < 3000
        );

        // Add new particles
        if (particlesRef.current.length % 5 === 0) {
          // Update state every 5 frames
          setParticles([...particlesRef.current]);
        }

        particlesRef.current.push(createParticle());

        animationFrame = requestAnimationFrame(updateParticles);
      };

      animationFrame = requestAnimationFrame(updateParticles);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [inView, createParticle]);

  return (
    <div
      ref={secref}
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 ${className}`}
    >
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 1, scale: 1 }}
            animate={
              inView && { x: particle.x, y: particle.y, opacity: 0, scale: 0 }
            }
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute w-3 h-3 bg-emerald-700 rounded-full"
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ParticleAnimation;
