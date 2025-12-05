import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  return (
    <div className="App bg-gradient-to-b from-indigo-900 via-purple-800 to-black min-h-screen w-full overflow-x-hidden responsive-container debug-responsive">
      <Navigation />
      <Hero />
      
      <ScrollToTop />
    </div>
  );
}

export default App; 