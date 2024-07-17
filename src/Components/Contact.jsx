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
          className='flex flex-col gap-2'>
            <span className='text-white font-medium'>Your Name</span>
            <input type='text' placeholder='John Doe' value={form.name}
            onChange={(e)=>setForm((current)=>({...current,name:e.target.value}))}
            className='border-white border-2 rounded-md p-2 outline-none font-medium'
            />
          </label>
          <label
          className='flex flex-col gap-2'>
            <span className='text-white font-medium'>Your E-Mail</span>
            <input type='email' placeholder='john_doe@mail.com' value={form.email}
            onChange={(e)=>setForm((current)=>({...current,email:e.target.value}))}
            className='border-white border-2 rounded-md p-2 outline-none font-medium'
            />
          </label>
          <label
          className='flex flex-col gap-2'>
            <span className='text-white font-medium'>Your Message</span>
            <textarea placeholder='My message is...' value={form.message}
            onChange={(e)=>setForm((current)=>({...current,message:e.target.value}))}
            className='border-white border-2 rounded-md p-2 outline-none font-medium'
            />
          </label>
          <button
          type='submit'
          className='bg-black text-white text-[20px] px-3 py-2
          border-white border-2 rounded-lg shadow-md hover:bg-white hover:text-black active:bg-white active:text-black hover:font-bold'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
      initial={{
        opacity:0
      }}
      animate={{
        opacity:1
      }}
      transition={{
        type:'spring',
        delay:0.5,
        duration:4
      }}
      
      >
        <h1 className='text-white'>Hi</h1>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,'contact');