import React from 'react';
import { Heart, Users, MapPin, Phone, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Informazioni organizzatore */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mr-3">
                <Users className="w-6 h-6 text-blue-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Clan Rafiki del BS11</h3>
                <p className="text-gray-400 text-sm">Serata Biliardino</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Organizzazione scout impegnata nella sensibilizzazione sui temi della disabilità 
              e dell'inclusione sociale attraverso eventi educativi e formativi.
            </p>
          </div>

          {/* Informazioni evento */}
          <div>
            <h3 className="text-xl font-bold mb-4">Abitare la Differenza</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-yellow-400" />
                <span className="text-gray-300">Sabato 19 Luglio</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-yellow-400" />
                <span className="text-gray-300">Oratorio San Francesco da Paola</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-yellow-400" />
                <span className="text-gray-300">Via Benacense 27, Brescia</span>
              </div>
            </div>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contatti</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-yellow-400">Iscrizioni Tornei</h4>
                <p className="text-gray-300">Aurora: +39 371 173 5797</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-400">Prenotazioni Cena</h4>
                <p className="text-gray-300">Alessia: +39 353 349 5405</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Clan Rafiki del BS11. Un evento per abitare insieme la differenza.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-gray-400 text-sm mr-2">Fatto con</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-gray-400 text-sm ml-2">per la comunità</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;