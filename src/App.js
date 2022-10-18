import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import MainSection from './components/mainSection/MainSection';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="mx-20">
     
      <Navbar />
      <Banner />
      <MainSection />
      <Footer />
     
    </div>
  );
}

export default App;
