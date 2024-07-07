import React from 'react';
import {motion} from 'framer-motion';

const Experience = () => {
  
  const variants = {
    hidden:{x:0,color:'#fff'},
    visible:{x:200, color:'#64a107'}
  };

  const subVariants = {
    hidden:{color:'#fff'},
    visible:{color:'#64a107'}
  };

  return (
    <motion.section
    initial='hidden'
    animate='visible'
    variants={variants}
    transition={{ ease: "easeOut", duration: 4 }}
    //className='bg-white w-[200px] h-[200px] rounded-full'
    >
     <motion.h1
     //variants={subVariants}
     initial={{color:'#fff'}}
     animate={{color:'#64a107'}}
     transition={{duration:3}}
     //className='text-white'
     >Hello World</motion.h1> 
    </motion.section>
  )
}

export default Experience