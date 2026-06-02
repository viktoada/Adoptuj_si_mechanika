import React from 'react';
import { X } from 'lucide-react';
import { getLeaderboardByMechanic, getTopScores } from '../utils/leaderboard';
import { mechanicNames } from '../data/mechanics';

const LeaderboardModal = ({ mechanic, onClose }) => {
  const mechanicScores = getLeaderboardByMechanic(mechanic.id);
  const topScores = getTopScores(5);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('cs-CZ');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Leaderboard - {mechanic.nickname}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Mechanic specific leaderboard */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-gray-800">Top skóre pro {mechanic.nickname}:</h3>
            {mechanicScores.length > 0 ? (
              <div className="space-y-2">
                {mechanicScores.slice(0, 10).map((entry, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-gray-100 p-3 rounded">
                    <div>
                      <span className="font-bold text-gray-800">#{idx + 1} {entry.nickname}</span>
                      <p className="text-xs text-gray-600">{formatDate(entry.date)}</p>
                    </div>
                    <span className="text-xl font-bold text-blue-600">{entry.score}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center py-4">Zatím žádné skóre. Buď první! 🚀</p>
            )}
          </div>

          {/* Global top scores */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-bold mb-3 text-gray-800">Top 5 všech mechaniků:</h3>
            {topScores.length > 0 ? (
              <div className="space-y-2">
                {topScores.map((entry, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-gradient-to-r from-yellow-50 to-yellow-100 p-3 rounded border border-yellow-200">
                    <div>
                      <span className="font-bold text-gray-800">
                        {idx === 0 && '🥇'}
                        {idx === 1 && '🥈'}
                        {idx === 2 && '🥉'}
                        {' '}
                        {entry.nickname} - {mechanicNames[entry.mechanicId] || 'Neznámý'}
                      </span>
                      <p className="text-xs text-gray-600">{formatDate(entry.date)}</p>
                    </div>
                    <span className="text-xl font-bold text-yellow-600">{entry.score}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center py-4">Zatím bez skóre. Hraj a buď první! 🎮</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardModal;
