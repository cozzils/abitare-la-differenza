import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-500 to-blue-600 overflow-hidden">
      {/* Elementi decorativi di sfondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Titolo principale */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              abitare la
              <br />
              <span className="text-blue-900">differenza</span>
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Mostra sul tema della disabilità
            </p>
          </div>

          {/* Informazioni evento */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Quando</h3>
              <p className="text-white/90 text-lg">Sabato 19 Luglio</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Dove</h3>
              <p className="text-white/90 text-lg">Oratorio San Francesco da Paola</p>
              <p className="text-white/80 text-sm">Via Benacense 27, Brescia</p>
            </div>
          </div>

          {/* Descrizione motivazionale */}
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/30">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Una serata di divertimento e buon cibo</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Durante il nostro anno di servizio abbiamo capito che la disabilità non ci ha 
              chiesto di fare di più ma di vedere meglio: forse il vero limite è l'idea di 
              normalità che ci portiamo dentro.
            </p>
          </div>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Scopri il Programma
            </button>
            <button 
              onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Iscriviti Ora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;