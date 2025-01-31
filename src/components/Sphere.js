import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  EffectComposer,
  Bloom,
  ToneMapping,
} from "@react-three/postprocessing";
import MoonPng from "../assets/Images/moon.png";

function Moon() {
  const moonRef = useRef();

  useFrame((state, delta) => {
    if (moonRef.current) {
      const tiltAxis = new THREE.Vector3(0, 0, 1); // Rotate only on the z-axis
      moonRef.current.rotation.z -= delta * 0.3;
    }
  });

  // Load the texture
  const texture = new THREE.TextureLoader().load(MoonPng, (texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
  });

  return (
    <>
      {/* Main Moon */}
      <Sphere ref={moonRef} args={[16, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial map={texture} metalness={0.2} roughness={0.8} />
      </Sphere>

      {/* Glow Effect Sphere */}
      <Sphere args={[16.04, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color={"white"}
          side={THREE.AlwaysDepth}
          emissive={"white"}
          emissiveIntensity={2}
        />
      </Sphere>
    </>
  );
}

const Spheres = ({ position = [0, 0, 40], fov = 45 }) => {
  return (
    <Canvas camera={{ position, fov }}>
      {/* Lights */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} />
      <spotLight position={[0, 20, 0]} angle={0.3} penumbra={1} intensity={2} />

      {/* Moon Component */}
      <Moon />

      {/* Postprocessing Effects */}
      <EffectComposer disableNormalPass>
        <Bloom
          mipmapBlur
          intensity={1.5}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
          levels={6}
        />
        <ToneMapping />
      </EffectComposer>
    </Canvas>
  );
};

export default Spheres;
