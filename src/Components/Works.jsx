import React from 'react';
import {motion} from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { projects } from '../constants';
import { git, github, webIcon } from '../assets';
import {Tilt} from 'react-tilt';


const ProjectCard = ({index, name, description, tags,image, github_page, source_code_link})=>{

  return (
    <motion.div
    variants={fadeIn('up','spring',0.3 * index, 2)}
    className='max-md:w-full max-md:py-2 px-4'
    >
      <Tilt
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className='bg-tertiary sm:w-[360px] w-full rounded-md p-5'
      >
        <div className='relative w-full h-[230px]'>
          <img src={image}
          alt={name}
          className='w-full h-full object-cover rounded-xl'
          />
          <div className='absolute flex justify-end m-3
          z-10 rounded-full
          card-img_hover top-0 right-0 gap-1'>
            <div
            onClick={()=> window.open(source_code_link, '_blank')}
            className='bg-gradient-to-r from-white to-gray-200 w-10 h-10
            flex justify-center items-center cursor-pointer rounded-full
            border-[1px] border-black'
            >
              <img
              src={webIcon}
              alt={source_code_link}
              className='w-1/2 h-1/2 object-contain'
              />
              
            </div>
            <div
            onClick={()=> window.open(github_page, '_blank')}
            className='black-gradient w-10 h-10 flex justify-center items-center cursor-pointer rounded-full'
            >
              <img
              src={github}
              alt='github'
              className='w-1/2 h-1/2 object-contain'
              />
              
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[20px]'>{name}</h3>
          <p className='text-secondary leading-normal text-[15px]'>{description}</p>
          <div className='flex justify-start items-center gap-2 flex-wrap'>
            {tags.map((tag,index)=>(
              <p key={index}
              className={`${tag.color} mt-5 text-[14px]`}
              >#{tag.name}</p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
};

const Works = () => {
  return (
    <>
      <motion.div
      variants={textVariant()}
      >
        <p className='text-sm text-secondary'>MY WORK</p>
        <h2 className='text-[50px] text-white font-bold'>Projects.</h2>
      </motion.div>
      <div
      className='w-full flex'
      >
        <motion.p
        variants={fadeIn('','',0.1,1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-normal'
        >The following projects show my skills and experience through real-world examples. Each project is briefly described with links to code repositories and live demos in it.
        It reflects my ability to resolve different challenges using different technologies.
        </motion.p>
      </div>
      <div className='mt-20 flex max-md:flex-col gap-7 md:overflow-auto'>
    {projects.map((project,index)=>(
      <ProjectCard 
      key={index}
      index={index}
      {...project}
      />
    ))}
      </div>
    </>

  )
}

export default SectionWrapper(Works, '');