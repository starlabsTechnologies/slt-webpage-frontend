import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const ParticleAnimation = ({ className = "" }) => {
  const [particles, setParticles] = useState([]);
  const particlesRef = useRef([]);
  const secref = useRef(null);
  const inView = useInView(secref);

  const randomPosition = () => {
    const angle = Math.random() * Math.PI * 2;
    const radius = 50 + Math.random() * 150; // Wider spread
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  const createParticle = () => ({
    id: Math.random(),
    ...randomPosition(),
  });

  useEffect(() => {
    let animationFrame;
    if (inView) {
      const updateParticles = () => {
        const now = Date.now();
        particlesRef.current = particlesRef.current
          .filter((p) => now - p.timestamp < 3000) // Remove old particles
          .concat(
            Array.from({ length: 1 }, () => ({
              ...createParticle(),
              timestamp: now,
            }))
          );

        setParticles([...particlesRef.current]); // Update state in batches
        animationFrame = requestAnimationFrame(updateParticles);
      };

      animationFrame = requestAnimationFrame(updateParticles);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [inView]);

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
