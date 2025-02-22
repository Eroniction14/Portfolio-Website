import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");

  if (!earth || !earth.scene) {
    console.error("Failed to load the GLTF model.");
    return null;
  }

  // Debug the geometry
  earth.scene.traverse((child) => {
    if (child.isMesh && child.geometry.attributes.position) {
      const positions = child.geometry.attributes.position.array;
  
      for (let i = 0; i < positions.length; i++) {
        if (isNaN(positions[i])) {
          positions[i] = 0; // Replace NaN with 0
        }
      }
  
      console.log(`Fixed NaN values in position attribute for ${child.name}`);
    }
  });
   
  

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};


const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;