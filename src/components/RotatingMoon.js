import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import MoonPng from "../assets/Images/moon.png";

function Moon() {
  const moonRef = useRef(THREE.Mesh);
  const [sphereSize, setSphereSize] = useState(16); // Default size

  // Update sphere size dynamically based on window width
  useEffect(() => {
    const updateSphereSize = () => {
      const width = window.innerWidth;

      let baseSize;

      if (width < 410) {
        baseSize = 120;
      } else if (width < 768) {
        // Mobile devices
        baseSize = 80; // Smaller base size for mobile
      } else if (width < 1200) {
        // Tablet devices
        baseSize = 12; // Medium base size for tablets
      } else {
        // Desktop devices
        baseSize = 32; // Larger base size for desktops
      }

      // Adjust base size dynamically as a percentage of the viewport width
      const dynamicSize = baseSize * (width / 1920); // Scale based on 1920px width
      setSphereSize(dynamicSize);
    };

    updateSphereSize(); // Initial size calculation
    window.addEventListener("resize", updateSphereSize);

    return () => window.removeEventListener("resize", updateSphereSize);
  }, []);

  // Apply rotation to the sphere
  useFrame((state, delta) => {
    if (moonRef.current) {
      const tiltAxis = new THREE.Vector3(0, 0, 1); // Rotate only on the z-axis
      moonRef.current.rotateOnAxis(tiltAxis, delta * 0.3);
    }
  });

  // Load the texture
  const texture = new THREE.TextureLoader().load(MoonPng);

  return (
    <Sphere ref={moonRef} args={[sphereSize, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial map={texture} metalness={0.2} roughness={0.6} />
    </Sphere>
  );
}

const RotatingMoon = () => {
  const [cameraPosition, setCameraPosition] = useState([0, 0, 20]); // Default camera position

  // Update camera position dynamically based on screen width
  useEffect(() => {
    const updateCameraPosition = () => {
      const width = window.innerWidth;

      let zPosition;
      if (width < 410) {
        zPosition = 25;
      } else if (width < 640) {
        zPosition = 65;
      } else if (width < 768) {
        zPosition = 80;
      } else if (width < 1200) {
        zPosition = 30;
      } else {
        zPosition = 90;
      }

      setCameraPosition([0, 0, zPosition]);
    };

    updateCameraPosition(); // Initial calculation
    window.addEventListener("resize", updateCameraPosition);

    return () => window.removeEventListener("resize", updateCameraPosition);
  }, []);

  return (
    <Canvas camera={{ position: cameraPosition, fov: 50 }}>
      <ambientLight intensity={0.3} color={0xcccccc} />
      <directionalLight
        position={[10, 10, 10]}
        intensity={1.2}
        color={0xffffff}
        castShadow
      />
      <pointLight
        position={[-10, -10, -10]}
        intensity={0.5}
        color={0xffffff}
        castShadow
      />
      <pointLight
        position={[10, -10, 10]}
        intensity={0.5}
        color={0xffffff}
        castShadow
      />
      <spotLight
        position={[0, 20, 0]}
        angle={0.2}
        penumbra={0.8}
        intensity={1.5}
        color={0xffffff}
        castShadow
      />
      <Moon />
    </Canvas>
  );
};

export default RotatingMoon;
