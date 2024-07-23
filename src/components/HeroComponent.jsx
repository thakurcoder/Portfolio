import React from 'react';
import { HERO_CONTENT } from '../constants/constantParagraph';
import aboutpic from "../assets/about.png.webp";

function HeroComponent() {
  return (
    <div className='relative p-5 lg:p-16 min-h-screen flex items-center justify-center'>
      <div 
        className='-top-28 absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'
        style={{ backgroundImage: `url(${aboutpic})` }}
      ></div>

      <div className='relative text-center text-white  p-5 -mt-40 '>
        <h1 className='text-4xl md:text-5xl font-thin mb-2'>Hey 👋</h1>
        <h1 className="text-4xl md:text-5xl font-thin mb-2">I'm Aman Kumar Singh</h1>
        <h2 className='bg-gradient-to-r from-fuchsia-300 via-teal-600 to-sky-950 bg-clip-text text-3xl md:text-4xl text-transparent mt-4'>
          Full Stack Developer
        </h2>
     
      </div>
    </div>
  );
}

export default HeroComponent;
