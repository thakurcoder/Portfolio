import React from 'react'

function Contact() {
  return (
    <div className='p-4' id='contact'>
      <h1 className='text-center text-3xl md:text-5xl my-8 md:my-16'>Contact</h1>
      <form action='https://formspree.io/f/mnnajvwr' method='post' className='text-lg md:text-xl flex flex-col gap-6 md:gap-11 items-center text-slate-100'>
        <input required  type='text' placeholder='Name' name='name' className='w-full max-w-md h-11 bg-transparent border border-slate-100 p-2' />
        <input required type='email' placeholder='Email' name='email' className='w-full max-w-md h-11 bg-transparent border border-slate-100 p-2' />
        <textarea required placeholder='Message' name='message' className='w-full max-w-md h-20 bg-transparent border border-slate-100 p-2' />
        <button type='submit' className='text-clip text-2xl md:text-3xl mb-8 md:mb-10 bg-teal-600 w-32 md:w-40 h-12 md:h-16 rounded-3xl hover:bg-cyan-800'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
