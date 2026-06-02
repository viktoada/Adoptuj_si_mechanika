import React from 'react';
import Grid from './components/Grid';

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzBmMTcyYSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZTNhOGEiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==)',
      }}
    >
      <div className="min-h-screen bg-black/40 backdrop-blur-sm">
        {/* Header */}
        <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-40">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">🚀</span>
              <div>
                <h1 className="text-3xl font-bold">Adoptuji Mechanika</h1>
                <p className="text-sm text-gray-300">Mechanici hledají domov - podpoř je hrou a adopcí!</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Info Banner */}
          <div className="bg-blue-500/80 backdrop-blur text-white p-4 rounded-lg mb-8 border border-blue-400">
            <p className="font-semibold mb-1">👋 Vítej!</p>
            <p className="text-sm">Klikni na kteroukoliv kartu mechanika, rozšíř si informace a vyzkoušej mini-hru, přispěj adopcí nebo se podívej na leaderboard!</p>
          </div>

          {/* Grid */}
          <Grid />
        </main>

        {/* Footer */}
        <footer className="bg-gray-900/80 backdrop-blur text-gray-300 text-center py-6 mt-12 border-t border-gray-700">
          <p className="text-sm">🔧 Mechanici si tě mohou vzít domů! Každá adopce pomáhá.</p>
          <p className="text-xs text-gray-500 mt-2">Tvá jména a částky nejsou nikdy veřejná • Leaderboard je dobrovolný</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
