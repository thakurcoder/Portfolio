import React, { useEffect, useRef, useState } from 'react';
import { HERO_CONTENT, ABOUT , SecondarySchool,HigherSecondary,college } from '../constants/constantParagraph';
import aboutpic from "../assets/about.png.webp";
import { motion, useInView } from 'framer-motion';

function About() {
    const refImage = useRef(null);
    const refText = useRef(null);

    const isImageInView = useInView(refImage, { triggerOnce: true });
    const isTextInView = useInView(refText, { triggerOnce: true });


 


  return (
    <div className='m-4' id='about'>
        <div className='text-5xl text-center mb-8'>
            <h1 className='text-slate-200'>
                About <span className='text-lime-900'>ME</span>
            </h1>  
        </div>
        <div className='flex flex-col md:flex-row'>
            <motion.div
            ref={refImage}
            initial={{ y: -300, opacity: 0 }}
            animate={isImageInView ? { y: 0, opacity: 1 } : { y: -300, opacity: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
             className='md:w-1/2 mb-8 md:mb-0 flex justify-center lg:mt-16 lg:mb-11 m-3'>
                <img
                 className='w-full rounded-3xl' src={aboutpic} alt="About Me" />
            </motion.div>
            <motion.div 
            ref={refText}
            initial={{ y: 300, opacity: 0 }}
            animate={isTextInView ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            className='md:w-1/2 flex flex-col  text-justify m-5 items-start gap-8 mt-24  '>
                {/* <p className="text-base md:text-lg lg:text-xl p-4 font-serif">{ABOUT}</p> */}

                <div className='shadow-3xl lg:text-xl outline outline-slate-300 p-3 m-2 w-full'>
                    <div className='flex justify-between w-full gap-14'>
                        <h1 className='text-indigo-500'>{college.class}</h1>
                        <h1>{college.year}</h1>
                    </div>
                    <h1>Complete my Bachelor of Computer Application <span className='font-bold'>{college.name}</span></h1>
                    <h1>{college.mark}</h1>
                </div>
                <div className='shadow-3xl lg:text-xl outline outline-slate-300 p-3 m-2 w-full'>
                    <div className='flex justify-between w-full gap-14'>
                        <h1 className='text-indigo-500'>{HigherSecondary.class}</h1>
                        <h1>{HigherSecondary.year}</h1>
                    </div>
                    <h1 className='font-bold'>{HigherSecondary.name}</h1>
                    <h1>{HigherSecondary.mark}</h1>
                </div>
                <div className='shadow-3xl lg:text-xl  outline outline-slate-300 p-3 m-2 w-full'>
                    <div className='flex justify-between w-full gap-14'>
                        <h1 className='text-indigo-500'>{SecondarySchool.class}</h1>
                        <h1>{SecondarySchool.year}</h1>
                    </div>
                    <h1 className='font-bold'>{SecondarySchool.name}</h1>
                    <h1>{SecondarySchool.mark}</h1>
                </div>
            </motion.div>
        </div>
    </div>
  );
}

export default About;
