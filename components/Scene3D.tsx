"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingParticles({ count = 500 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.03;
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={points} positions={particles} stride={3} frustumCulled={true}>
      <PointMaterial
        transparent
        color="#3AAFA9"
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

function FloatingGeometry() {
  const mesh1 = useRef<THREE.Mesh>(null);
  const mesh2 = useRef<THREE.Mesh>(null);
  const mesh3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh1.current) {
      mesh1.current.rotation.x = state.clock.elapsedTime * 0.5;
      mesh1.current.rotation.y = state.clock.elapsedTime * 0.3;
      mesh1.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
    if (mesh2.current) {
      mesh2.current.rotation.x = state.clock.elapsedTime * -0.4;
      mesh2.current.rotation.z = state.clock.elapsedTime * 0.2;
      mesh2.current.position.y = Math.cos(state.clock.elapsedTime * 0.7) * 0.5;
    }
    if (mesh3.current) {
      mesh3.current.rotation.y = state.clock.elapsedTime * 0.6;
      mesh3.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <>
      <mesh ref={mesh1} position={[-3, 2, -5]}>
        <tetrahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#6d28d9" emissiveIntensity={0.3} />
      </mesh>
      <mesh ref={mesh2} position={[3, -1, -4]}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color="#06b6d4" emissive="#0891b2" emissiveIntensity={0.3} />
      </mesh>
      <mesh ref={mesh3} position={[0, 1, -6]}>
        <dodecahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial color="#14b8a6" emissive="#0d9488" emissiveIntensity={0.3} />
      </mesh>
    </>
  );
}

export default function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <FloatingParticles count={500} />
    </>
  );
}
