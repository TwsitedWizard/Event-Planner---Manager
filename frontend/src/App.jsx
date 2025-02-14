import React from 'react';
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import  Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Edit from "./components/Edit";
import Delete from "./components/Delete"

const App = () => {
  return ( <Router>

    <Navbar/>
    <HeroSection/>
    <Services/>
    <About/>
    <Contact/>
    <Edit/>
    <Delete/>
    <Footer/>
    <Toaster/>

  </Router>
  );
};

export default App