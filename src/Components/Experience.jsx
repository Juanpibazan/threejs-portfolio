import React from 'react';
import {motion} from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../constants';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';


const ExperienceCard = ({experience})=>{


  return (
    <VerticalTimelineElement
    contentStyle={{backgroundColor:'#1d1d1d', color:'#fff'}}
    contentArrowStyle={{borderRight:'7px solid #232631'}}
    date={experience.date}
    iconStyle={{background: experience.iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img 
        src={experience.icon}
        className='rounded-full'
        />
      </div>
    }
    
    >
      <h3 className='font-bold text-[24px] mb-3'>{experience.title}</h3>
      <h4 className='font-semibold text-[20px] mb-3'>{experience.company_name}</h4>
      <ul className='list-disc ml-2'>
        {experience.points.map((point, index)=>(
          <li key={index} className='text-secondary'><p className='leading-normal'>{point}</p></li>
        ))}
      </ul>
      
    </VerticalTimelineElement>
  )
};

const Experience = () => {


  return (
    <>
      <motion.div
      initial='hidden'
      animate='show'
      variants={textVariant(2)}
      >
        <p className='text-secondary'>WHAT I HAVE DONE SO FAR...</p>
      </motion.div>
      <motion.h2
      initial={{x:-20,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{
        type:'spring',
        delay:2.5,
        duration:3
      }}
      className='text-[50px] font-bold'
      >Work Experience</motion.h2>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience,index)=>(
            <ExperienceCard 
            key={index}
            experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience,'work')