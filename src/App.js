import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="mx-20">
     
      <Navbar />
      <Banner />
     
    </div>
  );
}

export default App;
