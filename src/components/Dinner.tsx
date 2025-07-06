import React from 'react';
import { UtensilsCrossed, Clock, Heart, Wheat } from 'lucide-react';

const Dinner: React.FC = () => {
  const menuItems = [
    {
      category: "Pane e Salumi",
      icon: Wheat,
      items: [
        { name: "Pane fresco locale", description: "buon pane fresco e morbido" },
        { name: "Salamina Bresciana", description: "Specialità tipica del territorio" }
      ],
      color: "from-amber-500 to-amber-600"
    },
    {
      category: "Formaggi",
      icon: Heart,
      items: [
        { name: "Formaggio fuso", description: "Cremoso e saporito, perfetto per condividere" }
      ],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      category: "Contorni",
      icon: UtensilsCrossed,
      items: [
        { name: "Patatine fritte", description: "Croccanti e dorate, preparate al momento" },
        { name: "Bruschetta ai pomodori", description: "Pomodori freschi su pane tostato" }
      ],
      color: "from-green-500 to-green-600"
    },
    {
      category: "Bevande",
      icon: Clock,
      items: [
        { name: "Bibite", description: "Selezione di bevande analcoliche e alcoliche" },
        { name: "Acqua", description: "Naturale e frizzante" }
      ],
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section id="dinner" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Menu della Serata
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gustosa cena con specialità locali per condividere un momento di convivialità
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {menuItems.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-semibold text-gray-800 text-lg">{item.name}</h4>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Informazioni cena */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Orario</h3>
              <p className="text-lg opacity-90">Dalle ore 19:00</p>
            </div>
            
            <div className="text-center">
              <UtensilsCrossed className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Stile</h3>
              <p className="text-lg opacity-90">Cena condivisa e informale</p>
            </div>
            
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Atmosfera</h3>
              <p className="text-lg opacity-90">Convivialità e inclusione</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg opacity-90 mb-4">
              La cena è un momento importante per stare insieme e condividere non solo il cibo, 
              ma anche esperienze e riflessioni sulla giornata.
            </p>
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Prenota la tua Cena
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dinner;