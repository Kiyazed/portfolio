// PortfolioSection.js
import React, { useState } from 'react';

const Projects = () => {
   // State to toggle the expanded text
   const [isExpanded, setIsExpanded] = useState(false);

   // Function to toggle state
   const toggleReadMore = () => {
     setIsExpanded(!isExpanded);
   };
 
  return (
    <section id="project" className="py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-black py-10">
          My recent <span className="text-teal-400">works</span>
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-teal-400 text-white py-2 px-4 rounded-full">All</button>
          <button className="bg-lightGray text-gray-300 py-2 px-4 rounded-full">Web Design</button>
        </div>
        
        {/* Portfolio Items */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="portfolio-item bg-gray-800 p-6 rounded-lg shadow-lg">
            {/* Image 1 */}
            <img src="/Picture1.png" alt="Project 1" className="rounded-lg h-80 w-full" />
            <h1 className='text-teal-400 font-bold py-2 text-xl'>Online Examination</h1>
            <p className="text-white text-lg">
            Me and my team designed and developed an online examination website to facilitate streamlined, efficient, and secure online assessments.
             This project underscores my expertise in both frontend and backend development, 
            emphasizing user experience, data integrity, and security in the digital learning environment.{' '}
        {isExpanded && (
          <span className="text-white">
            <p> Features:-</p> <ul>
              <li>User management</li>
              <li>Exam creation & management</li>
              <li>Automated grading</li>
              <li>Responsive design</li>
              </ul> 
              <p>Technology used: MERN Stack</p>
          </span>
        )}
      </p>
      <button 
        onClick={toggleReadMore} 
        className="mt-4 text-blue-600 hover:text-blue-800 font-semibold"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
          </div>
          <div className="portfolio-item bg-gray-800 p-6 rounded-lg shadow-lg">
            {/* Image 2 */}
            <img src="/img1.png" alt="Project 2" className="rounded-lg h-80 w-full " />
            <h1 className='text-teal-400 font-bold py-2 text-xl'> Home Renting</h1>
            <p className="text-white text-lg">
            A home renting website is an online platform designed to connect property owners with potential renters, providing a streamlined experience for both parties in finding and renting homes, apartments, and other living spaces. It typically includes user-friendly tools to help users search, filter, and view rental properties based on preferences like location, price, number of rooms, and amenities.{' '}
        {isExpanded && (
          <span className="text-white">
            <p> Features:-</p> <ul>
              <li>User profile</li>
              <li>Property listing</li>
              <li>Search & filter</li>
              <li>Payment</li>
              <li>Review & Rating</li>
              </ul> 
              <p>Technology used: MERN Stack</p>
          </span>
        )}
      </p>
      <button 
        onClick={toggleReadMore} 
        className="mt-4 text-blue-600 hover:text-blue-800 font-semibold"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
          </div>
          <div className="portfolio-item bg-gray-800 p-6 rounded-lg shadow-lg">
            {/* Image 3 */}
            <img src="/img2.jpg" alt="Project 3" className="rounded-lg h-80 w-full" />
            <h1 className='text-teal-400 font-bold py-2 text-xl'> Life Insurance</h1>
            <p className='text-white'>A life insurance website is an online platform designed to help individuals explore, compare, and purchase life insurance policies. It provides essential information about various insurance plans, coverage options, premium calculations, and tools to assist users in selecting the right policy for their needs. The goal of a life insurance website is to simplify the process of understanding life insurance products, connecting users with suitable options, and making the application process straightforward and accessible.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
