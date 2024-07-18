import React, {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,useGLTF, Preload } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {

  const earth = useGLTF('./planet/scene.gltf');

  return (
    <mesh>
      <hemisphereLight
      intensity={1.5}
      groundColor='black'
      />
      <pointLight />
      <primitive
      object={earth.scene}
      scale={1.2}

      />
    </mesh>
  )
}

const EarthCanvas = ()=>{

  return (
    <Canvas
    shadows
    frameloop='demand'
    gl={{preserveDrawingBuffer:true}}
    camera={
      {
      //position:[5,3,5],
      position:[-4,3,5],
      fov:25
    }
    }
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )
};

export default EarthCanvas;