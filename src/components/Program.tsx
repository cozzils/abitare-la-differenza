import React from 'react';
import { Clock, Trophy, UtensilsCrossed, Fish, Users } from 'lucide-react';

const Program: React.FC = () => {
  const activities = [
    {
      icon: Users,
      title: "Mostra sulla Disabilità",
      time: "Durante tutta la serata",
      description: "Visita la mostra interattiva che esplora il tema della disabilità con un approccio inclusivo e di sensibilizzazione.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Trophy,
      title: "Torneo di Roverino",
      time: "Dalle ore 17:00",
      description: "Partecipa al torneo di roverino. Squadre da 5 giocatori, iscrizione 4€ a partecipante.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: UtensilsCrossed,
      title: "Cena",
      time: "Dalle ore 19:00",
      description: "Gustosa cena con specialità locali: pane e salamina, patatine fritte, formaggio fuso e bruschette.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Trophy,
      title: "Torneo di Freccette",
      time: "Dalle ore 20:30",
      description: "Sfida di precisione con le freccette. Squadre da 2 giocatori, iscrizione 5€ a partecipante.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Fish,
      title: "Pesca",
      time: "Aperta a tutti",
      description: "Pesca di beneficenza con premi per tutti i partecipanti. Un'attività divertente per tutta la famiglia.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="program" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Programma della Serata
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una serata ricca di attività, divertimento e riflessione per abitare insieme la differenza
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${activity.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <activity.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{activity.title}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="font-medium">{activity.time}</span>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ma l'evento non finisce qui...</h3>
            <p className="text-lg opacity-90">
              Scopri tutti i dettagli sui tornei, il menu della cena e come iscriverti!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;