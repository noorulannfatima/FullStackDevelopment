import React, { useEffect } from 'react';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Footer from './components/Footer';
import Section3 from './components/Section3';
import './App.css';
import Marquee from './components/Marquee';
import Section4 from './components/Section4';


const App = () => {
  useEffect(() => {
    // Remove the spinner after the app has loaded
    const spinner = document.getElementById('spinner');
    if (spinner) {
      spinner.remove(); // This will completely remove the spinner element from the DOM
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      
      <Header/>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Marquee/>
      <Section4/>
      <Footer/>
    </div>
  )
}

export default App
