import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NGOsPartners from './pages/NGOsPartners.js';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Footer from './components/Footer';
import ReportIssue from './pages/ReportIssue.js';
import Donations from './pages/Donations.js';
import Volunteer from './pages/Volunteer.js';
import Contact from './pages/Contact.js';

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<ReportIssue />} />
          <Route path="/donate" element={<Donations />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/partners" element={<NGOsPartners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;