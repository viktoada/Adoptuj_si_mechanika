import React, { useState } from 'react';
import MechanicCard from './MechanicCard';
import GameModal from './GameModal';
import AdoptionModal from './AdoptionModal';
import LeaderboardModal from './LeaderboardModal';
import { mechanics } from '../data/mechanics';
import { saveScore } from '../utils/leaderboard';

const Grid = () => {
  const [selectedMechanic, setSelectedMechanic] = useState(null);
  const [activeModal, setActiveModal] = useState(null); // 'game', 'adoption', 'leaderboard'

  const handlePlay = (mechanic) => {
    setSelectedMechanic(mechanic);
    setActiveModal('game');
  };

  const handleAdopt = (mechanic) => {
    setSelectedMechanic(mechanic);
    setActiveModal('adoption');
  };

  const handleLeaderboard = (mechanic) => {
    setSelectedMechanic(mechanic);
    setActiveModal('leaderboard');
  };

  const handleSaveScore = (score, nickname) => {
    if (selectedMechanic) {
      saveScore(selectedMechanic.id, score, nickname);
    }
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setSelectedMechanic(null);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mechanics.map(mechanic => (
          <MechanicCard
            key={mechanic.id}
            mechanic={mechanic}
            onPlay={handlePlay}
            onAdopt={handleAdopt}
            onLeaderboard={handleLeaderboard}
          />
        ))}
      </div>

      {/* Modals */}
      {activeModal === 'game' && selectedMechanic && (
        <GameModal
          mechanic={selectedMechanic}
          onClose={handleCloseModal}
          onSaveScore={handleSaveScore}
        />
      )}

      {activeModal === 'adoption' && selectedMechanic && (
        <AdoptionModal
          mechanic={selectedMechanic}
          onClose={handleCloseModal}
        />
      )}

      {activeModal === 'leaderboard' && selectedMechanic && (
        <LeaderboardModal
          mechanic={selectedMechanic}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Grid;
