import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Navbar() {
  return (
    <header className=' flex justify-between items-center m-2 p-2  '>
        {/* logo */}
        <div className='text-3xl m-5  '>
            <h1>AKS</h1>
        </div>
      

        {/* socal media icon */}
        <div className='flex text-4xl'>
        
        <a href='https://www.linkedin.com/in/aman-kumar-singh-6178771b4/'target='_blank' ><FaLinkedin className='p-1 mx-2 cursor-pointer hover:scale-150'/></a>
        <a href='https://github.com/thakurcoder' target='_blank' ><FaGithubSquare className='p-1 mx-2 cursor-pointer hover:scale-150'/></a>
        <a href='https://leetcode.com/u/Amansinghrajput/' target='_blank' ><SiLeetcode className='p-1 mx-2 cursor-pointer hover:scale-150'/></a>
        </div>
    </header>
  )
}

export default Navbar