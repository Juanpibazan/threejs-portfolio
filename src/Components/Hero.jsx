import React, {useState,useEffect} from 'react';
import {motion} from 'framer-motion';

import { styles } from '../styles';
import ComputerCanvas from './canvas/Computers';


const Hero = () => {
  return (
    <section
    id='home'
    className='relative w-full h-screen mx-auto flex flex-col justify-center items-start'
    >
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-start items-center gap-2'>
          <div className='bg-[#6ee2f5] rounded-full w-5 h-5' />
          <div className='bg-gradient-to-b from-[#6ee2f5] to-black rounded-full w-2 h-[200px]' />
        </div>
        <div className='flex flex-col justify-center items-start gap-7'>
          <h1 className='text-white font-bold text-7xl'>Hi, I'm <span className='text-[#6ee2f5]'>Juan Pablo</span></h1>
          <p className='text-xl leading-normal'>I develop 3D visuals,<br className='sm:hidden' /> user interfaces and web applications</p>
        </div>
      </div>
      <ComputerCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full
      flex justify-center items-center mt-4'
      >
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-xl
          border-4 border-white flex justify-center items-start p-2'>
            <motion.dev 
            animate={{
              y:[0,24,0]
            }}
            transition={{
              duration:1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='rounded-full border-2 border-white w-3 h-3 bg-white'
            />
          </div>
        </a>
        
      </div>
    </section>
  )
}

export default Hero