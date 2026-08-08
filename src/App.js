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
import Location from './pages/Location';
import { LOCATION_ROUTES } from './seo/locations';
import LanguageWrapper from './components/LanguageWrapper';
import Seo from './components/Seo';
import Analytics from './components/Analytics';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <LanguageWrapper>
        <>
          <Seo />
          <Analytics />
          <Banner />
          <Navbar />
          <div className="app-container">
            <Routes>
              {/* English routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/piano" element={<Piano />} />
              <Route path="/violin-viola" element={<ViolinViola />} />
              <Route path="/current-students" element={<CurrentStudents />} />
              <Route path="/contact" element={<Contact />} />

              {/* Per-suburb landing pages, e.g. /music-lessons-glenview */}
              {LOCATION_ROUTES.map((route) => (
                <Route key={route} path={route} element={<Location />} />
              ))}

              {/* Chinese routes */}
              <Route path="/tw/" element={<Home />} />
              <Route path="/tw/about" element={<AboutMe />} />
              <Route path="/tw/piano" element={<Piano />} />
              <Route path="/tw/violin-viola" element={<ViolinViola />} />
              <Route path="/tw/current-students" element={<CurrentStudents />} />
              <Route path="/tw/contact" element={<Contact />} />
              {LOCATION_ROUTES.map((route) => (
                <Route key={`tw${route}`} path={`/tw${route}`} element={<Location />} />
              ))}

              {/* Fallback route */}
              
            </Routes>
          </div>
        </>
      </LanguageWrapper>
    </Router>
  );
}

export default App;
