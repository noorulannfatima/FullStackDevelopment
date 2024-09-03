import React from 'react';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Footer from './components/Footer';
import Section8 from './components/Section8';
import Section9 from './components/Section9';

const App = () => {
  return (
    <div>
      <Header />
      
      <Section1 id="section1" />
      <Section2 id="section2" />
      <Section3 id="section3" />
      <Section4 id="section4" />
      <Section9 id="section9" />
      <Section5 id="section5" />
      <Section6 id="section6" />
      <Section7 id="section7" />
      <Section8 id="section8" />
      
      
      <Footer />
    </div>
  );
};

export default App;
