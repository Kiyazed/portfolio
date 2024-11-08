import React from 'react';
import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
function HeroSection() {
    
    
  
  return (
    <section className="flex flex-col items-center justify-center  text-center px-4 py-10 md:px-10">
      <header className="w-full flex justify-between items-center py-0">
        <h1 className="text-gray-400 flex px-4 text-2xl font-bold">KIYA ZEWDU</h1>
        <nav className="flex gap-8 text-gray-500">
          <a href="#home" className='cursor-pointer hover:text-teal-600'>Home</a>
          <a href="#about" className='cursor-pointer hover:text-teal-600'>About Me</a>
          <a href="#project" className='cursor-pointer hover:text-teal-600'>Project</a>
          <a href="#contact" className='cursor-pointer hover:text-teal-600'>Contact</a>

        
        </nav>
      </header>
      <div className='flex justify-center gap-10'> 
      <div className="mt-16 md:mt-32 flex flex-col items-center gap-4">
        <h2 className="text-4xl md:text-6xl font-bold">
          SOFTWARE ENGINEER <span className="text-teal-600">| <Typewriter
  options={{
    strings: ['WEB DESIGNER', ''],
    autoStart: true,
    loop: true,
  }}
/> </span>
        </h2>
        <div className="flex gap-4 mt-40">
          <button className="bg-teal-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-teal-300 cursor-pointer">Hire me</button>
          <a href="/CV-updated.pdf" download="My_CV" className="bg-gray-800 text-gray-400 px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-teal-400 hover:text-black cursor-pointer">
            Download CV <span>&#x1F4BE;</span>
           </a>
        </div>
        <div className="mt-12">
          <div className="text-gray-500"><ArrowDropDownCircleIcon fontSize='' className="animate-bounce mt-56 mb-0 text-teal-600 text-5xl"/></div>
        </div>
      </div>
     <div>
        <img src="https://img.freepik.com/free-vector/working-from-anywhere-concept-illustration_114360-4317.jpg?t=st=1731004853~exp=1731008453~hmac=036b3b25dda9e2ff17d853f04b8e61ad0825869428894313b90d24659e76b057&w=740" alt='illustrator'/>
     </div>
      </div>
    </section>
  );
}

export default HeroSection;
