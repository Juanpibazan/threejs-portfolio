import React, {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Decal, Float, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';
import WebGL from 'three/addons/capabilities/WebGL.js';

const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float
    speed={1.75}
    rotationIntensity={1}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0,0,0.05]} />
      <mesh
      castShadow
      receiveShadow
      scale={2.75}
      >
        <icosahedronGeometry  args={[1,1]} />
        <meshStandardMaterial
        color='#fff8eb'
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
        />
        <Decal
        map={decal}
        position={[0,0,1]}
        rotation={[2*Math.PI,0,6.25]}
        />
      </mesh>
    </Float>
  )
}


const BallCanvas = ({icon})=>{

  if (!WebGL.isWebGL2Available()){
    return (
      <div>
        <h2 className='text-[20px] text-red-600'>Sorry, the 3D elements are not available on your device.</h2>
      </div>
    )
  }
  else{


  return (
    <Canvas
      frameloop='demand'
      //shadows
      //camera={{position:[20,3,5], fov:25}}
      gl={{preserveDrawingBuffer:true}}
      className='max-sm:w-full mb-10'
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
          enableZoom={false}
          />
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
  )
};
}

export default BallCanvas;