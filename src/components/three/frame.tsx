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
    //console.log(params)

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
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
      {/*<div className="absolute h-full container mx-auto mb-8 inset-x-0 bottom-0 font-bold lg:text-9xl md:text-6xl text-neutral-200">
        
          <h1 className="">
            {params.data.title}
          </h1>
          <p className="text-right">{params.data.description}</p>
  </div>*/}
      </>
  )
}
