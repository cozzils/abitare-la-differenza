import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-yellow-400 to-blue-600 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Testo di caricamento */}
        <div className="text-white mb-8">
          <h2 className="text-2xl font-bold mb-2">Abitare la Differenza</h2>
          <p className="text-lg opacity-90">Caricamento in corso...</p>
        </div>
        
        {/* Barra di caricamento */}
        <div className="w-64 h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full loading-bar"></div>
        </div>
      </div>

      <style jsx>{`
        .loading-bar {
          width: 0%;
          animation: loading 2s ease-in-out infinite;
        }
        
        @keyframes loading {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;