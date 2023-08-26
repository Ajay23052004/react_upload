import React from 'react';
import css from './style.css';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer';
import CollabSection from './components/CollabSection';
import Services from './components/Services.jsx';
import Section from './components/Section.jsx';
import Features from './components/Features';
import Testmonial from './components/Testmonial';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <CollabSection/>
      <Services />
      <Features />
      <Section />
      <Testmonial />
      <Footer />
    </div>
  );
}

export default App;
