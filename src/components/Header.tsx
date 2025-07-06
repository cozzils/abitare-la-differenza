import React, { useState, useEffect } from 'react';
import { Menu, X, Users, Calendar, Trophy, UtensilsCrossed, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home', icon: Users },
    { name: 'Programma', href: '#program', icon: Calendar },
    { name: 'Tornei', href: '#tournaments', icon: Trophy },
    { name: 'Cena', href: '#dinner', icon: UtensilsCrossed },
    { name: 'Iscrizioni', href: '#registration', icon: Phone },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-900" />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Clan Rafiki BS11
              </h1>
              <p className={`text-sm transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}>
                Abitare la Differenza
              </p>
            </div>
          </div>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`flex items-center space-x-2 transition-colors hover:text-yellow-400 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>

          {/* Menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <item.icon className="w-5 h-5 text-yellow-500" />
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;