import React, { useState } from 'react';
import { Play, Gift, Trophy } from 'lucide-react';

const MechanicCard = ({ mechanic, onPlay, onAdopt, onLeaderboard }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="relative h-64 bg-gradient-to-br cursor-pointer transform transition-all duration-300 hover:scale-105"
      style={{
        backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${mechanic.color} rounded-lg shadow-lg overflow-hidden`}>
        {/* Card front */}
        {!isExpanded ? (
          <div className="h-full flex flex-col items-center justify-center text-white p-4">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-center">{mechanic.nickname}</h3>
            <p className="text-xs text-center opacity-80 mt-2">Klikni pro rozšíření</p>
          </div>
        ) : (
          /* Card expanded */
          <div className="h-full flex flex-col p-4 text-white overflow-y-auto">
            <h3 className="text-lg font-bold mb-2">{mechanic.name}</h3>
            <p className="text-sm mb-4 leading-relaxed">{mechanic.description}</p>
            
            <div className="text-xs space-y-1 mb-4 flex-1 overflow-y-auto">
              {mechanic.facts.map((fact, idx) => (
                <div key={idx} className="opacity-90">{fact}</div>
              ))}
            </div>

            <div className="flex gap-2 mt-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPlay(mechanic);
                }}
                className="flex-1 bg-white text-gray-800 py-2 px-3 rounded font-bold text-sm flex items-center justify-center gap-1 hover:bg-gray-100 transition"
              >
                <Play size={16} /> Hrát
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAdopt(mechanic);
                }}
                className="flex-1 bg-white text-gray-800 py-2 px-3 rounded font-bold text-sm flex items-center justify-center gap-1 hover:bg-gray-100 transition"
              >
                <Gift size={16} /> Adoptovat
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onLeaderboard(mechanic);
                }}
                className="flex-1 bg-white text-gray-800 py-2 px-3 rounded font-bold text-sm flex items-center justify-center gap-1 hover:bg-gray-100 transition"
              >
                <Trophy size={16} /> Top
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MechanicCard;
