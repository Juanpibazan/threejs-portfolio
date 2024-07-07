import React from 'react';
import {BallCanvas} from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div
    className='flex flex-row flex-wrap gap-2'>
      {technologies.map((technology)=>(
        <div className='w-28 h-28'>
          <BallCanvas key={technology.name} icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,'');