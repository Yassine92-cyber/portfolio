"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Scene3D from "./Scene3D";
import WebGLFallback from "./WebGLFallback";

export default function Canvas3D() {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // Check if WebGL is available
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        return !!gl;
      } catch (e) {
        return false;
      }
    };

    setMounted(true);
    setHasWebGL(checkWebGL());
  }, []);

  if (!mounted || !hasWebGL || error) {
    return <WebGLFallback />;
  }

  try {
    return (
      <div className="fixed inset-0 -z-10 pointer-events-none" style={{ background: 'transparent' }}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ 
            alpha: true, 
            antialias: false,
            powerPreference: "high-performance",
            stencil: false,
            depth: true
          }}
          dpr={[1, 1.5]}
          performance={{ min: 0.5 }}
          onError={() => {
            setError(true);
          }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>
    );
  } catch (e) {
    return <WebGLFallback />;
  }
}

