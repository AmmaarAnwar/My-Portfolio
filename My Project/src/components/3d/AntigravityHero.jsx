import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  Stars,
  MeshDistortMaterial,
  Sphere,
  Sparkles,
} from "@react-three/drei";
import { useTheme } from "../../context/ThemeContext";
import * as THREE from "three";

const HeroContent = () => {
  const meshRef = useRef();
  const { viewport, mouse } = useThree();
  const { theme } = useTheme();

  useFrame((state) => {
    if (meshRef.current) {
      const x = (mouse.x * viewport.width) / 2;
      const y = (mouse.y * viewport.height) / 2;

      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        x,
        0.008,
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        y,
        0.008,
      );

      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group>
      <ambientLight intensity={theme === "dark" ? 0.5 : 0.8} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={theme === "dark" ? 1.5 : 2}
        color={theme === "dark" ? "#22d3ee" : "#0ea5e9"}
      />
      <pointLight
        position={[-10, -10, -5]}
        intensity={1}
        color={theme === "dark" ? "#a855f7" : "#d946ef"}
      />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color={theme === "dark" ? "#06b6d4" : "#3b82f6"}
            attach="material"
            distort={0.4}
            speed={2}
            roughness={theme === "dark" ? 0.2 : 0.1}
            metalness={theme === "dark" ? 0.8 : 0.6}
          />
        </Sphere>
      </Float>

      {theme === "dark" ? (
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      ) : (
        <Sparkles
          count={200}
          scale={12}
          size={4}
          speed={0.4}
          opacity={0.5}
          color="#475569"
        />
      )}
    </group>
  );
};

const AntigravityHero = () => {
  return <HeroContent />;
};

export default AntigravityHero;
