import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Piano from './pages/Piano';
import ViolinViola from './pages/ViolinViola';
import CurrentStudents from './pages/CurrentStudents';
import Contact from './pages/Contact';
import { LanguageProvider } from './LanguageContext';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <>
          <Banner />
          <Navbar />
          <div className="app-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/piano" element={<Piano />} />
              <Route path="/violin-viola" element={<ViolinViola />} />
              <Route path="/current-students" element={<CurrentStudents />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/about" />} />
            </Routes>
          </div>
        </>
      </Router>
    </LanguageProvider>
  );
}

export default App;
