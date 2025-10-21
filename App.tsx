import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import LoginModal from './components/LoginModal';
import ThemeEditor from './components/ThemeEditor';
import BusinessInfoEditor from './components/BusinessInfoEditor';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { BusinessInfoProvider } from './context/BusinessInfoContext';
import { ContentProvider } from './context/ContentContext';

import Home from './pages/Home';
import Service from './pages/Service';
import OurWork from './pages/OurWork';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ContentProvider>
        <ThemeProvider>
          <BusinessInfoProvider>
            <div className="flex flex-col min-h-screen bg-brand-dark">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/service" element={<Service />} />
                  <Route path="/our-work" element={<OurWork />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
              <FloatingCallButton />
              <LoginModal />
              <ThemeEditor />
              <BusinessInfoEditor />
            </div>
          </BusinessInfoProvider>
        </ThemeProvider>
      </ContentProvider>
    </AuthProvider>
  );
};

export default App;
