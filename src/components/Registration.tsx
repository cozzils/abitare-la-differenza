import React from 'react';
import { Phone, Calendar, MapPin, Clock, Users, Trophy, UtensilsCrossed } from 'lucide-react';

const Registration: React.FC = () => {


  const contacts = [
    {
      name: "Aurora",
      role: "Iscrizioni Tornei",
      phone: "+39 371 173 5797",
      description: "Per iscriverti ai tornei di roverino e freccette",
      icon: Trophy,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Alessia",
      role: "Prenotazioni Cena",
      phone: "+39 353 349 5405",
      description: "Per prenotare la cena e informazioni sul menu",
      icon: UtensilsCrossed,
      color: "from-green-500 to-green-600"
    }
  ];

  const eventInfo = [
    {
      icon: Calendar,
      title: "Data",
      value: "Sabato 19 Luglio",
      color: "text-yellow-600"
    },
    {
      icon: Clock,
      title: "Orario",
      value: "Dalle 17:00",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Luogo",
      value: "Oratorio San Francesco da Paola",
      subtitle: "Via Benacense 27, Brescia",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Organizzatore",
      value: "Clan Rafiki del BS11",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="registration" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Iscrizioni e Prenotazioni
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prenota il tuo posto per una serata indimenticabile di divertimento e riflessione
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contatti */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Contatti</h3>
            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center mr-4`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{contact.name}</h4>
                      <p className="text-gray-600 text-sm">{contact.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{contact.description}</p>
                  
                  <a 
                    href={`tel:${contact.phone}`}
                    className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {contact.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Informazioni evento */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Informazioni Evento</h3>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="space-y-6">
                {eventInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${info.color} bg-opacity-10`}>
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{info.title}</h4>
                      <p className="text-gray-600 text-lg">{info.value}</p>
                      {info.subtitle && (
                        <p className="text-gray-500 text-sm">{info.subtitle}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to action finale */}
        <div className="bg-gradient-to-r from-yellow-400 to-blue-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Non perdere questa opportunità!</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Partecipa all'evento "Abitare la Differenza" per vivere una serata di riflessione, 
            divertimento e condivisione che ti arricchirà profondamente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+393711735797"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Chiamata Rapida - Tornei
            </a>
            <a 
              href="tel:+393533495405"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Chiamata Rapida - Cena
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;