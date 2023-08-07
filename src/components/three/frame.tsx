"use client";
import { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { getGPUTier } from "detect-gpu";





export default function Frame(params) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [starCount, setStarCount] = useState(600);

  (async () => {
    const gpuTier = await getGPUTier();

    if (gpuTier.tier === 3) {
      setStarCount(5000)
    } else if (gpuTier.tier === 2) {
      setStarCount(1000)
    } else if (gpuTier.tier === 1) {
      setStarCount(600)
    }
  
    //console.log(gpuTier)
  })();

  useEffect(() => {
    const canvas = canvasRef.current;
    const resizeCanvas = () => {
      const navbar = document.getElementsByClassName(
        "navbar"
      )[0] as HTMLElement;
      const width = window.innerWidth;
      const height = window.innerHeight - (navbar?.offsetHeight || 0);
      if (canvas) {
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
      }
    };
    //console.log(params)

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <Canvas ref={canvasRef}>
        <Stars
          radius={100}
          depth={50}
          count={starCount}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.3}
          enableDamping={false}
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />
      </Canvas>
    </>
  );
}
