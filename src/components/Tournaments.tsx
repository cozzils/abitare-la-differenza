import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowLeft, Check, X } from 'lucide-react';

// Interfacce TypeScript
interface Tournament {
  id: string;
  name: string;
  date: string;
  time: string;
  minPlayers: number;
  price: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  btnColor: string;
}

interface TournamentFormData {
  teamName: string;
  phone: string;
  players: string[];
}

interface DinnerFormData {
  name: string;
  surname: string;
  phone: string;
  guests: number;
}

interface Notification {
  message: string;
  type: 'success' | 'error';
}

// Inizializza EmailJS una sola volta
const Tournaments: React.FC = () => {
  useEffect(() => {
    emailjs.init('YRs5iRA2Id2iGd7u9');
  }, []);

  const [currentView, setCurrentView] = useState<'tournaments' | 'tournament-booking' | 'dinner-booking'>('tournaments');
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<Notification | null>(null);

  // Dati di esempio per i tornei
  const tournaments: Tournament[] = [
    {
      id: 'roverino',
      name: 'Torneo di Roverino',
      date: '',
      time: '17:00',
      minPlayers: 5,
      price: '4€ a partecipante',
      description: 'torneo di roverino che metterà alla prova le tue abilità tattiche e di coordinazione. evento perfetto per divertirsi in gruppo!',
      icon: (
        <div className="bg-blue-500 text-white rounded-2xl w-14 h-14 flex items-center justify-center text-3xl">
          <span role="img" aria-label="coppa">🏆</span>
        </div>
      ),
      bgColor: 'bg-blue-50',
      btnColor: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      id: 'freccette',
      name: 'Torneo di Freccette',
      date: '',
      time: '20:30',
      minPlayers: 2,
      price: '5€ a partecipante',
      description: 'Sfida di precisione e concentrazione. Ogni lancio conta in questa competizione che premierà i più abili nel centrare il bersaglio.',
      icon: (
        <div className="bg-orange-500 text-white rounded-2xl w-14 h-14 flex items-center justify-center text-3xl">
          <span role="img" aria-label="bersaglio">🎯</span>
        </div>
      ),
      bgColor: 'bg-orange-50',
      btnColor: 'bg-orange-600 hover:bg-orange-700',
    },
  ];

  const EMAILJS_SERVICE_ID = 'service_ap1k4xn';
  const EMAILJS_TEMPLATE_ID_TOURNAMENT = 'template_qkff9v9';
  const EMAILJS_TEMPLATE_ID_DINNER = 'template_u8kflrc';

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleTournamentBooking = (tournament: Tournament) => {
    setSelectedTournament(tournament);
    setCurrentView('tournament-booking');
  };

  const handleDinnerBooking = () => setCurrentView('dinner-booking');

  const handleTournamentSubmit = async (formData: TournamentFormData) => {
    setLoading(true);

    try {
      // Validazione campi
      if (!formData.teamName.trim()) {
        throw new Error('Nome squadra richiesto');
      }

      if (!formData.phone.trim()) {
        throw new Error('Numero di telefono richiesto');
      }

      if (!validatePhone(formData.phone)) {
        throw new Error('Numero di telefono non valido');
      }

      if (!formData.players || !Array.isArray(formData.players) || formData.players.length === 0) {
        throw new Error('Inserisci almeno un giocatore');
      }

      if (formData.players.some((player: string) => !player.trim())) {
        throw new Error('Tutti i nomi dei giocatori sono richiesti');
      }

      const emailData = {
        to_email: 'bsbiliardo@gmail.com',
        team_name: formData.teamName.trim(),
        tournament_name: selectedTournament?.name || 'Torneo',
        players: formData.players.join(', '),
        phone: formData.phone.trim(),
        date: new Date().toLocaleDateString('it-IT'),
        time: new Date().toLocaleTimeString('it-IT'),
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID_TOURNAMENT, emailData);
      showNotification('Prenotazione torneo inviata con successo!', 'success');
      setTimeout(() => setCurrentView('tournaments'), 2000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Errore durante l\'invio della prenotazione';
      showNotification(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDinnerSubmit = async (formData: DinnerFormData) => {
    setLoading(true);

    try {
      // Validazione campi
      if (!formData.name.trim()) {
        throw new Error('Nome richiesto');
      }

      if (!formData.surname.trim()) {
        throw new Error('Cognome richiesto');
      }

      if (!formData.phone.trim()) {
        throw new Error('Numero di telefono richiesto');
      }

      if (!validatePhone(formData.phone)) {
        throw new Error('Numero di telefono non valido');
      }

      if (!formData.guests || formData.guests < 1) {
        throw new Error('Numero di ospiti richiesto (minimo 1)');
      }

      const emailData = {
        to_email: 'bsbiliardo@gmail.com',
        name: formData.name.trim(),
        surname: formData.surname.trim(),
        phone: formData.phone.trim(),
        guests: formData.guests.toString(),
        submission_date: new Date().toLocaleDateString('it-IT'),
        submission_time: new Date().toLocaleTimeString('it-IT'),
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID_DINNER, emailData);
      showNotification('Prenotazione cena inviata con successo!', 'success');
      setTimeout(() => setCurrentView('tournaments'), 2000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Errore durante l\'invio della prenotazione';
      showNotification(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  const renderNotification = () => {
    if (!notification) return null;
    return (
      <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-md ${
        notification.type === 'success' 
          ? 'bg-green-100 text-green-700 border border-green-300' 
          : 'bg-red-100 text-red-700 border border-red-300'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {notification.type === 'success' ? (
              <Check className="w-5 h-5 mr-2" />
            ) : (
              <X className="w-5 h-5 mr-2" />
            )}
            <span className="text-sm font-medium">{notification.message}</span>
          </div>
          <button 
            onClick={() => setNotification(null)}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  const renderTournaments = () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="grid gap-8 md:grid-cols-2">
        {tournaments.map((tournament) => (
          <div
            key={tournament.id}
            className={`rounded-2xl shadow-md p-8 flex flex-col h-full ${tournament.bgColor}`}
          >
            <div className="flex items-center mb-4">
              {tournament.icon}
              <span className="ml-4 text-2xl font-bold text-gray-800">{tournament.name}</span>
            </div>
            <div className="flex flex-col gap-2 mb-4 text-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-lg">🕒</span>
                <span>Dalle ore {tournament.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">👥</span>
                <span>Minimo {tournament.minPlayers} giocatori per squadra</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">💶</span>
                <span>{tournament.price}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6">{tournament.description}</p>
            <div className="mt-auto">
              <button
                onClick={() => handleTournamentBooking(tournament)}
                className={`w-full text-white py-3 px-4 rounded-lg font-semibold text-base transition-colors ${tournament.btnColor}`}
              >
                Iscriviti al Torneo
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <div className="rounded-2xl shadow-md p-8 flex flex-col h-full bg-green-50 max-w-xl w-full">
          <div className="flex items-center mb-4">
            <div className="bg-green-500 text-white rounded-2xl w-14 h-14 flex items-center justify-center text-3xl">
              <span role="img" aria-label="cena">🍽️</span>
            </div>
            <span className="ml-4 text-2xl font-bold text-gray-800">Prenotazione Cena</span>
          </div>
          <p className="text-gray-700 mb-6">
            Vuoi prenotare una cena per il tuo gruppo? Contattaci per organizzare un evento speciale.
          </p>
          <button
            onClick={handleDinnerBooking}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-base hover:bg-green-700 transition-colors"
          >
            Prenota Cena
          </button>
        </div>
      </div>
    </div>
  );

  const renderTournamentBooking = () => (
    <div className="p-8 max-w-2xl mx-auto">
      <button 
        onClick={() => setCurrentView('tournaments')}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Torna ai Tornei
      </button>

      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Iscrizione: {selectedTournament?.name}
      </h1>

      <TournamentBookingForm 
        onSubmit={handleTournamentSubmit}
        loading={loading}
        tournament={selectedTournament}
      />
    </div>
  );

  const renderDinnerBooking = () => (
    <div className="p-8 max-w-2xl mx-auto">
      <button 
        onClick={() => setCurrentView('tournaments')}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Torna ai Tornei
      </button>

      <h1 className="text-2xl font-bold mb-6 text-gray-800">Prenotazione Cena</h1>

      <DinnerBookingForm 
        onSubmit={handleDinnerSubmit}
        loading={loading}
      />
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gray-50">
      {renderNotification()}
      {currentView === 'tournaments' && renderTournaments()}
      {currentView === 'tournament-booking' && renderTournamentBooking()}
      {currentView === 'dinner-booking' && renderDinnerBooking()}
    </div>
  );
};

// Componente per il form di prenotazione torneo
interface TournamentBookingFormProps {
  onSubmit: (data: TournamentFormData) => void;
  loading: boolean;
  tournament: Tournament | null;
}

const TournamentBookingForm: React.FC<TournamentBookingFormProps> = ({ onSubmit, loading, tournament }) => {
  const [formData, setFormData] = useState<TournamentFormData>({
    teamName: '',
    phone: '',
    players: ['', '', '']
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const addPlayer = () => {
    setFormData(prev => ({
      ...prev,
      players: [...prev.players, '']
    }));
  };

  const removePlayer = (index: number) => {
    if (formData.players.length > 1) {
      setFormData(prev => ({
        ...prev,
        players: prev.players.filter((_, i) => i !== index)
      }));
    }
  };

  const updatePlayer = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      players: prev.players.map((player, i) => i === index ? value : player)
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nome Squadra *
        </label>
        <input
          type="text"
          value={formData.teamName}
          onChange={(e) => setFormData(prev => ({ ...prev, teamName: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Inserisci il nome della squadra"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Telefono *
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="+39 123 456 7890"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Giocatori *
        </label>
        {formData.players.map((player, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={player}
              onChange={(e) => updatePlayer(index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Giocatore ${index + 1}`}
              required
            />
            {formData.players.length > 1 && (
              <button
                type="button"
                onClick={() => removePlayer(index)}
                className="px-3 py-2 text-red-600 hover:text-red-800"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addPlayer}
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          + Aggiungi Giocatore
        </button>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? 'Invio in corso...' : 'Invia Prenotazione'}
      </button>
    </form>
  );
};

// Componente per il form di prenotazione cena
interface DinnerBookingFormProps {
  onSubmit: (data: DinnerFormData) => void;
  loading: boolean;
}

const DinnerBookingForm: React.FC<DinnerBookingFormProps> = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState<DinnerFormData>({
    name: '',
    surname: '',
    phone: '',
    guests: 1
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nome *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Il tuo nome"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cognome *
          </label>
          <input
            type="text"
            value={formData.surname}
            onChange={(e) => setFormData(prev => ({ ...prev, surname: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Il tuo cognome"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Telefono *
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="+39 123 456 7890"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Numero Ospiti *
        </label>
        <input
          type="number"
          min="1"
          max="20"
          value={formData.guests}
          onChange={(e) => setFormData(prev => ({ ...prev, guests: parseInt(e.target.value) || 1 }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? 'Invio in corso...' : 'Invia Prenotazione Cena'}
      </button>
    </form>
  );
};

export default Tournaments;
