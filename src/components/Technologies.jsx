import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { SiPrisma } from "react-icons/si";

function Technologies() {
  return (
    <div>
        <h1 className='text-5xl text-center my-11 '>Technologies</h1>
        <div className='text-9xl  flex flex-wrap justify-center m-5 gap-10 md:gap-5 ' >
        <FaReact className='text-cyan-400 animate-bounce hover:animate-spin' style={{ animationDelay: '0s'}} /> 
      <RiNextjsFill className='animate-bounce  hover:animate-spin' style={{ animationDelay: '0.1s' }}  /> 
      <SiTypescript className='text-blue-600 animate-bounce  hover:animate-spin' style={{ animationDelay: '0.2s' }} /> 
      <IoLogoJavascript className='text-yellow-400 animate-bounce  hover:animate-spin' style={{ animationDelay: '0.3s' }} /> 
      <DiMongodb className='text-green-600 animate-bounce hover:animate-spin' style={{ animationDelay: '0.4s' }} />
      <DiPostgresql className='text-blue-500 animate-bounce  hover:animate-spin' style={{ animationDelay: '0.5s' }}/> 
      <SiPrisma className='text-blue-400 animate-bounce  hover:animate-spin' style={{ animationDelay: '0.6s' }} /> 
      <FaNode className='text-green-600 animate-bounce  hover:animate-spin' style={{ animationDelay: '0.7s' }} /> 
      <SiExpress className='text-green-600 animate-bounce  hover:animate-spin'style={{ animationDelay: '0.8s' }} /> 
      <RiTailwindCssFill className='text-sky-400 animate-bounce delay-0  hover:animate-spin 'style={{ animationDelay: '0.9s' }} /> 
        </div>
    </div>
  )
}

export default Technologies