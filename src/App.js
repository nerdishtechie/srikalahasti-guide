import React, { useState } from 'react';
import Header from './components/Header';
import  Footer from './components/Footer';
import Contact from './components/Contact'; 
import Home from './components/Home';
import Navbar from './components/Navbar';
import Accommodation from './components/Accommodation';
import Places from './components/Places';
import Restaurants from './components/Restaurants';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Header />
      <Navbar onSectionClick={handleSectionClick} />
      <main>
        {activeSection === 'home' && <Home />}
        {activeSection === 'accommodation' && <Accommodation />}
        {activeSection === 'places' && <Places />}
        {activeSection === 'restaurants' && <Restaurants />}
        {activeSection === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  )
};

export default App;