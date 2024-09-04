import React from 'react'
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
