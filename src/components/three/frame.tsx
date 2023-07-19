"use client"
import { useEffect, useRef, } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'


export default function Frame( params ) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const resizeCanvas = () => {
      const navbar = document.getElementsByClassName('navbar')[0] as HTMLElement;
      const width = window.innerWidth;
      const height = window.innerHeight - (navbar?.offsetHeight || 0);
      if (canvas) {
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <Canvas ref={canvasRef}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <OrbitControls 
        autoRotate 
        autoRotateSpeed={0.3} 
        enableDamping={false}
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        />
    </Canvas>
  )
}
