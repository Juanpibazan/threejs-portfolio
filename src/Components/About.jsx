import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';

import { styles } from '../styles';
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, icon, title})=>{
  return (
    <Tilt key={index}
    className='flex flex-col justify-start items-center gap-5 w-full xs:w-[250px]'
    >
      <motion.div
      variants={fadeIn('right', 'spring',0.8 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        options={{
          max: 45,
          scale: 1.5,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-[5px] px-[12px] min-h-[280px] flex flex-col justify-evenly items-center'
        >
          <div className='flex'>
          <img
          src={icon}
          alt={title}
          className='w-[50px] h-[50px]'
          />
          </div>
          <h3 className='text-white font-bold text-[25px] text-center'>{title}</h3>
        </div>
      </motion.div>
      
    </Tilt>
  )
};


const About = () => {
  return (
    <section className='flex flex-col justify-center items-start gap-4 sm:px-4 px-10'
    >
      <motion.div
      variants={textVariant(10)}
      >
        <h3 className={styles.heroSubText}>INTRODUCTION</h3>
        <h1 className={styles.heroHeadText}>Overview.</h1>
        <motion.p 
        variants={fadeIn('','',0.1,1)}
        className='text-secondary leading-[30PX]'>I'm a skilled developer with experience in different frameworks and programming languages. I have built different sites using NodeJS, ReactJS, ThreeJS and TailwindCSS.
          I love to leran and can adapt very quickly. Please feel free to visit those sites by clicking on the links in the next section.
        </motion.p>
        <div
        className='mt-20 flex flex-wrap gap-10'
        >
          {services.map((service, index)=>(
              <ServiceCard 
              index={index}
              {...service}
              />
          ))}

        </div>

      </motion.div>

    </section>
  )
}

export default SectionWrapper(About,'about');