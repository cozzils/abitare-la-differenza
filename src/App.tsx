import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Program from './components/Program';
import Tournaments from './components/Tournaments';
import Dinner from './components/Dinner';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula il caricamento per 3 secondi
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Program />
        <Tournaments />
        <Dinner />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

export default App;