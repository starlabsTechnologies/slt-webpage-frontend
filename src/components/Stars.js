import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function MovingStars() {
  const starsRef = useRef();

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0005;
      starsRef.current.rotation.x += 0.0002;
    }
  });

  const starsGeometry = React.useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const starsCount = 10000; // Dense stars
    const positions = new Float32Array(starsCount * 3);
    const colors = new Float32Array(starsCount * 3);
    const sizes = new Float32Array(starsCount);

    const colorOptions = [
      new THREE.Color(0xffffff), // White
      new THREE.Color(0xffd700), // Yellow
      new THREE.Color(0x87ceeb), // Light Blue
    ];

    for (let i = 0; i < starsCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 3000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3000;

      const color =
        colorOptions[Math.floor(Math.random() * colorOptions.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 2 + 1;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    return geometry;
  }, []);

  const starsMaterial = React.useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          gl_PointSize = size;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vColor;
        void main() {
          float twinkle = 0.5 + 0.5 * sin(time + gl_FragCoord.x * 0.1 + gl_FragCoord.y * 0.1);
          gl_FragColor = vec4(vColor * twinkle, 1.0);
        }
      `,
      vertexColors: true,
      transparent: true,
    });
  }, []);

  return (
    <points ref={starsRef} geometry={starsGeometry} material={starsMaterial} />
  );
}

function StarryNight() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1000], fov: 75 }}
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <MovingStars />
    </Canvas>
  );
}

export default StarryNight;
