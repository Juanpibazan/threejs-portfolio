import React,{ useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import reactLogo from './assets/react.svg';


import {About, Contact, Experience, Navbar, Hero, Works, Tech, Feedbacks, StarsCanvas} from './Components';

import * as THREE from 'three';




const App = () => {

  //Scene
  const scene = new THREE.Scene();

  //creste our Sphere
  const geometry = new THREE.SphereGeometry(10,64,64);
  const material = new THREE.MeshStandardMaterial(
    {
      color: '#00ff83'
    });
  
  const mesh = new THREE.Mesh(geometry,material);
  scene.add(mesh);
  
  //Camera
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  scene.add(camera);

  //Renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  return (
    <Router>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </Router>
  )
}

export default App
