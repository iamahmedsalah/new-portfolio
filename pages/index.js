import React from 'react';


// Components
import Avatar from '@/components/Avatar';
import ProjectsBtn from '@/components/ProjectsBtn';
import CvBtn from '@/components/CvBtn';
import Iconmition from '@/components/Iconmition';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, container } from '@/variants';


// Animte text
const Name = ' Ahmed Soliman El-Sayed ';



export default function Home() {
  return (
    <div className="w-full h-full ">
      {/* Left Side */}
      <div className=' flex flex-row justify-between items-start flex-wrap gap-4 text-primary '>
        <div className="flex flex-col justify-center items-center mt-7 lg:mt-50 lg:ml-10 ">
          {/* Title */}
          <motion.h1
            variants={container}
            initial='hidden'
            animate='show'
            exit='hidden'>
            {Name.split('').map((char, index) =>
              <motion.span className='text-amber-500 text-xl lg:text-4xl font-semibold '
                variants={staggerContainer} key={index}>
                {char}
              </motion.span>)}
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl xl:mx-0 mb-5  text-sm xl:text-[18px] font-extralight text-center' >
            self-motivated, result-oriented, and detail-oriented, with a passion for creative problem-solving and collaboration.
          </motion.p>

          {/* Buttons */}
          <div className='flex flex-row justify-around items-center flex-wrap gap-x-10  '>
            <ProjectsBtn />
            <CvBtn />
          </div>

        </div>

        {/* Right Side */}
         <Iconmition/>
      </div>

      {/* My Avatar */}
      <motion.div
        className='absolute bottom-20 left-0 right-0 xl:bottom-0 transition-all duration-150 ease-in-out'>
        <Avatar />
      </motion.div>
    </div>
  );
}
