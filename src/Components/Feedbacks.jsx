import React from 'react';
import {motion} from 'framer-motion';

import {SectionWrapper} from '../hoc';
import { styles } from '../styles';
import {testimonials} from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const TestimonialCard = ({testimonial,name,designation, company, image})=>{
  return (
    <div className='flex flex-col mjustify-start
    items-center gap-3 mt-7 bg-black-100 rounded-md p-2'>
      <motion.h3
      initial={{x:500,z:-1000,opacity:0}}
      animate={{x:0,z:1,opacity:1}}
      transition={{
        type:'spring',
        duration:2,
        delay:1}}
      className='text-white font-bold text-[30px]'>{name}</motion.h3>
      <motion.div
      initial={{x:-500,z:-1000,opacity:0}}
      animate={{x:0,z:1,opacity:1}}
      transition={{
        type:'just',
        duration:2,
        delay:1.2}}
      className='w-[100px] h-[100px] rounded-full'>
        <img
          src={image}
          className='object-cover w-full h-full rounded-full'
        />
      </motion.div>
      <motion.p
      initial={{y:1000,z:-1000,opacity:0}}
      animate={{y:0,z:1,opacity:1}}
      transition={{
        type:'just',
        duration:2,
        delay:1.3}}
      className='text-secondary text-[20px] leading-normal text-justify'>{testimonial}</motion.p>
    </div>
  )
};

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div
        initial='hidden'
        animate='show'
        variants={textVariant(0.5)}
        >
          <p className={styles.sectionSubText}>What others say</p>
          <h3 className='text-white font-black md:text-[50px] sm:text-[40px] xs:text-[50px] text-[60px]'>Testimonials.</h3>
        </motion.div>
        <div className='flex flex-col sm:flex-row justify-start sm:justify-evenly items-start sm:items-center gap-7'>
        {testimonials.map((testimonial, index)=>(
          <TestimonialCard key={index} 
          {...testimonial}
          />
        ))}
        </div>
      </div>

    </div>
  )
}

export default SectionWrapper(Feedbacks,'');