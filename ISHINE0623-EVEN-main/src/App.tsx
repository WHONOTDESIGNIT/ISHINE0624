import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import Home from './pages/Home';
import Services from './pages/Services';
import Clients from './pages/Clients';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/Privacy';
import TermsOfService from './pages/TermsOfService';

// Product Pages
import SapphireIPL from './pages/products/SapphireIPL';
import SmartAppIPL from './pages/products/SmartAppIPL';
import EmeraldIPL from './pages/products/EmeraldIPL';
import IceCoolingIPL from './pages/products/IceCoolingIPL';
import DualLampIPL from './pages/products/DualLampIPL';
import PremiumLuxuryIPL from './pages/products/PremiumLuxuryIPL';
import BatteryPoweredIPL from './pages/products/BatteryPoweredIPL';
import HebeIPL from './pages/products/HebeIPL';
import HandheldIPL from './pages/products/HandheldIPL';
import GoddessIPL from './pages/products/GoddessIPL';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              
              {/* Product Routes */}
              <Route path="/products/sapphire-ipl" element={<SapphireIPL />} />
              <Route path="/products/smart-app-ipl" element={<SmartAppIPL />} />
              <Route path="/products/emerald-ipl" element={<EmeraldIPL />} />
              <Route path="/products/ice-cooling-ipl" element={<IceCoolingIPL />} />
              <Route path="/products/dual-lamp-ipl" element={<DualLampIPL />} />
              <Route path="/products/premium-luxury-ipl" element={<PremiumLuxuryIPL />} />
              <Route path="/products/battery-powered-ipl" element={<BatteryPoweredIPL />} />
              <Route path="/products/hebe-ipl" element={<HebeIPL />} />
              <Route path="/products/handheld-ipl" element={<HandheldIPL />} />
              <Route path="/products/goddess-ipl" element={<GoddessIPL />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWidgets />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;