import {Suspense, useState, useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {

  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh
    position={isMobile ? [0,0,0] : [0,-1,0]}
    //rotation={[Math.PI / 2, 0, 0]}
    >
      <hemisphereLight
      intensity={1.5}
      groundColor='black'
      />
      <pointLight intensity={1.5} />
      <spotLight
      position={[-20,50,10]}
      angle={0.12}
      penumbra={1}
      intensity={4}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive 
      object={computer.scene}
      scale={isMobile ? 0.4 : 0.75}
      //position={isMobile ? [-8,-5,-2.2] : [0,-5, -1.5]}
      //position={isMobile ? [-10,1,10] : [0,-5, -1.5]}
      //rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  )
};

const ComputerCanvas = ()=>{

  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width : 600px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event)=>{
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return ()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }

  },[]);


  return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{position:[20,3,5], fov:12}}
    gl={{preserveDrawingBuffer:true}}
    className='max-sm:w-full mt-50'
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        //autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
};

export default ComputerCanvas;