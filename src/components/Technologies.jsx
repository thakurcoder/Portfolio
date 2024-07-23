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
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

function Technologies() {
  return (
    <div>
      <h1 className='text-5xl text-center my-11'>Technologies</h1>
      <div className='text-9xl flex flex-wrap justify-center m-5 gap-10 md:gap-5'>
        <div className='flex flex-col items-center'>
          <FaReact className='text-cyan-400 animate-bounce hover:animate-spin' style={{ animationDelay: '0s' }} />
          <span className='text-lg mt-2'>React</span>
        </div>
        <div className='flex flex-col items-center'>
          <RiNextjsFill className='animate-bounce hover:animate-spin' style={{ animationDelay: '0.1s' }} />
          <span className='text-lg mt-2'>Next.js</span>
        </div>
        <div className='flex flex-col items-center'>
          <SiTypescript className='text-blue-600 animate-bounce hover:animate-spin' style={{ animationDelay: '0.2s' }} />
          <span className='text-lg mt-2'>TypeScript</span>
        </div>
        <div className='flex flex-col items-center'>
          <IoLogoJavascript className='text-yellow-400 animate-bounce hover:animate-spin' style={{ animationDelay: '0.3s' }} />
          <span className='text-lg mt-2'>JavaScript</span>
        </div>
        <div className='flex flex-col items-center'>
        <FaPython className='text-blue-400 animate-bounce hover:animate-spin' style={{ animationDelay: '0.4s' }} />
          <span className='text-lg mt-2'>Python</span>
        </div>
        <div className='flex flex-col items-center'>
          <TbBrandCpp className='text-blue-600 animate-bounce hover:animate-spin' style={{ animationDelay: '0.5s' }} />
          <span className='text-lg mt-2'>C++</span>
        </div>
        <div className='flex flex-col items-center'>
          <DiMongodb className='text-green-600 animate-bounce hover:animate-spin' style={{ animationDelay: '0.6s' }} />
          <span className='text-lg mt-2'>MongoDB</span>
        </div>
        <div className='flex flex-col items-center'>
          <DiPostgresql className='text-blue-500 animate-bounce hover:animate-spin' style={{ animationDelay: '0.7s' }} />
          <span className='text-lg mt-2'>PostgreSQL</span>
        </div>
        <div className='flex flex-col items-center'>
          <SiPrisma className='text-blue-400 animate-bounce hover:animate-spin' style={{ animationDelay: '0.8s' }} />
          <span className='text-lg mt-2'>Prisma</span>
        </div>
        <div className='flex flex-col items-center'>
          <FaNode className='text-green-600 animate-bounce hover:animate-spin' style={{ animationDelay: '0.9s' }} />
          <span className='text-lg mt-2'>Node.js</span>
        </div>
        <div className='flex flex-col items-center'>
          <SiExpress className='text-green-600 animate-bounce hover:animate-spin' style={{ animationDelay: '1s' }} />
          <span className='text-lg mt-2'>Express</span>
        </div>
        <div className='flex flex-col items-center'>
          <RiTailwindCssFill className='text-sky-400 animate-bounce hover:animate-spin' style={{ animationDelay: '1.1s' }} />
          <span className='text-lg mt-2'>Tailwind CSS</span>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
