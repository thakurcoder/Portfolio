import React from "react";
import { HERO_CONTENT } from "../constants/constantParagraph";
import profilepic from "../assets/amanphoto.jpg";
import { motion } from "framer-motion";
import resume from "../assets/Aman_Kumar_Singh.pdf"

function Hero() {
  return (
    <div className="p-5 lg:p-16 -mt-11">
      <div className="flex flex-col lg:flex-row items-center">
        <div id="resume" className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
          <motion.h1 
          initial={{x:-100,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:2,dealy:0.5}}
          className="text-4xl md:text-5xl font-thin tracking-tight pb-5 lg:pb-10 text-gold">
            Aman Kumar Singh
          </motion.h1>
          <motion.h2 
          initial={{x:-200,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:2,dealy:1}}
          className="bg-gradient-to-r from-fuchsia-300 via-teal-600 to-sky-950 bg-clip-text text-3xl md:text-4xl text-transparent">
            Full Stack Developer
          </motion.h2>
          <motion.p  
          initial={{x:-300,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:2,dealy:1.5}}
          className=" md:text-lg lg:text-xl pt-5 my-2 font-serif">
            {HERO_CONTENT}
          </motion.p>
          <a href={resume}  target="_blank"><button className="bg-cyan-500 rounded-xl text-clip  w-32 text-3xl hover:bg-teal-700">Resume</button></a>
        </div>
        <motion.div
        initial={{x:400,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:2,dealy:2}}
         className="flex justify-center lg:w-1/2">
          <img
            className="w-48 rounded-3xl md:w-64 lg:w-3/4"
            src={profilepic}
            alt="Aman Kumar Singh"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
