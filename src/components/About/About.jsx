import React from 'react';

function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center min-h-screen text-center px-4 md:px-10">
      <div className="w-full md:w-1/2 md:text-left md:px-10">
        <h3 className="text-4xl md:text-5xl font-bold">
          About <span className="text-teal-400">me</span>
        </h3>
        <p className="text-gray-500 mt-4 leading-relaxed text-xl">
        Hello! I'm Kiya, a dedicated frontend developer with a passion for creating engaging and user-friendly web applications. With a background in software engineering and hands-on experience in web development, 
        I enjoy turning complex ideas into simple, visually appealing designs. My expertise lies in HTML, CSS, JavaScript, and React, where I focus on crafting responsive, dynamic interfaces that offer a seamless user experience. Outside of coding, I’m always eager to learn new technologies, design patterns, and best practices to further enhance my skill set. Thank you for visiting my portfolio—I look forward to collaborating and bringing innovative ideas to life!
        </p>
        
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="relative w-60 h-60 bg-teal-400 rounded-full">
          {/* Placeholder for illustration */}
        </div>
      </div>
    </section>
  );
}

export default About;
