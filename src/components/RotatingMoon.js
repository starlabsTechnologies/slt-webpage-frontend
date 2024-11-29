import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import MoonPng from "../assets/Images/moon.png";

function Moon() {
  const moonRef = useRef(THREE.Mesh);

  useFrame((state, delta) => {
    if (moonRef.current) {
      const tiltAxis = new THREE.Vector3(0, 0, 1); // Rotate only on the z-axis
      // Increase the rotation speed
      moonRef.current.rotateOnAxis(tiltAxis, delta * 0.3);
    }
  });

  // Load the texture
  const texture = new THREE.TextureLoader().load(MoonPng, (texture) => {
    // Set texture wrapping to repeat and adjust aspect ratio if necessary
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
  });
  return (
    <Sphere ref={moonRef} args={[16, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial map={texture} metalness={0.2} roughness={0.6} />
    </Sphere>
  );
}

const RotatingMoon = ({ position = [0, 0, 20], fov = 45 }) => {
  return (
    <Canvas camera={{ position, fov }}>
      <ambientLight intensity={0.3} color={0xcccccc} />
      <directionalLight
        position={[10, 10, 10]}
        intensity={1.2}
        color={0xffffff} // White light simulating sunlight
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
