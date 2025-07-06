import React from 'react';
import { Trophy, Users, Euro, Clock, Target } from 'lucide-react';

const Tournaments: React.FC = () => {
  const tournaments = [
    {
      name: "Torneo di Roverino",
      icon: Trophy,
      time: "Dalle ore 17:00",
      players: "Minimo 5 giocatori per squadra",
      cost: "4€ a partecipante",
      description: "torneo di roverino che metterà alla prova le tue abilità tattiche e di coordinazione. evento perfetto per divertirsi in gruppo!",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "Torneo di Freccette",
      icon: Target,
      time: "Dalle ore 20:30",
      players: "2 giocatori per squadra",
      cost: "5€ a partecipante",
      description: "Sfida di precisione e concentrazione. Ogni lancio conta in questa competizione che premierà i più abili nel centrare il bersaglio.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section id="tournaments" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Tornei Educativi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partecipa ai nostri tornei per vivere un'esperienza di gioco inclusiva e divertente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {tournaments.map((tournament, index) => (
            <div 
              key={index}
              className={`${tournament.bgColor} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${tournament.color} rounded-2xl flex items-center justify-center mr-4`}>
                  <tournament.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{tournament.name}</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-3 text-gray-500" />
                  <span className="font-medium">{tournament.time}</span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 mr-3 text-gray-500" />
                  <span className="font-medium">{tournament.players}</span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Euro className="w-5 h-5 mr-3 text-gray-500" />
                  <span className="font-medium">{tournament.cost}</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{tournament.description}</p>

              <button className={`w-full bg-gradient-to-r ${tournament.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}>
                Iscriviti al Torneo
              </button>
            </div>
          ))}
        </div>

        {/* Sezione regolamento */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Regolamento</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Iscrizione</h4>
              <p className="text-gray-600 text-sm">Le iscrizioni si chiudono 15 minuti prima dell'inizio di ogni torneo</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Fair Play</h4>
              <p className="text-gray-600 text-sm">Rispetto e sportività sono fondamentali per tutti i partecipanti</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Premi</h4>
              <p className="text-gray-600 text-sm">Riconoscimenti per i primi classificati di ogni torneo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tournaments;