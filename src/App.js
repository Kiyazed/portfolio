import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer/Footer";

import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Projects from './components/Project/Projects';
import Contact from './components/Contact/Contact';



function App() {
  return (
    
    <div className="App">

       <HeroSection/>
       <About id="about"/>
       <Projects/>
       <Contact/>
     
       <Footer/>

    </div>
    
  );
}

export default App;
