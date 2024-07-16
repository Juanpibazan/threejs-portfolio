import React, {useState, useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import {EarthCanvas} from './canvas';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:''
  });
  const [loading, setloading] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) =>{

  };

  const handleChange = (e)=>{

  };

  return (
    <div
    className='xl:mt-12 xl:flex-row flex-col-reverse gap-10 flex justify-start items-center overflow-hidden'
    >
      <motion.div
      variants={slideIn('left','tween',0.2,1)}
      className='bg-tertiary p-8 xl:w-[40%] w-full'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
        >
          <label
          className='flex flex-col'>
            <span className='text-white font-medium'>Your Name</span>
            <input />
          </label>

        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,'contact');