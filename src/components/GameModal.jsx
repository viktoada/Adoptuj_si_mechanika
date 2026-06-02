import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

const GameModal = ({ mechanic, onClose, onSaveScore }) => {
  const [gameRunning, setGameRunning] = useState(true);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [nickname, setNickname] = useState('');
  const canvasRef = useRef(null);

  // Simple click game
  useEffect(() => {
    if (!gameRunning || timeLeft <= 0) {
      if (timeLeft <= 0) setGameRunning(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameRunning, timeLeft]);

  // Draw game area
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f3f4f6';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#1f2937';
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`Skóre: ${score}`, canvas.width / 2, 40);
    ctx.fillText(`Čas: ${timeLeft}s`, canvas.width / 2, 80);
  }, [score, timeLeft]);

  const handleCanvasClick = () => {
    if (gameRunning && timeLeft > 0) {
      setScore(s => s + 10);
    }
  };

  const handleSaveScore = () => {
    if (nickname.trim()) {
      onSaveScore(score, nickname);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Minihra - {mechanic.nickname}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {gameRunning && timeLeft > 0 ? (
            <>
              <canvas
                ref={canvasRef}
                width={400}
                height={200}
                onClick={handleCanvasClick}
                className="w-full bg-gray-100 rounded cursor-pointer mb-4 hover:bg-gray-200 transition"
              >
                Klika na canvas a sbírej body!
              </canvas>
              <p className="text-center text-gray-600">Klikej na canvas a sbírej body! ⏱️</p>
            </>
          ) : (
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">Finální skóre: {score}</h3>
                <p className="text-gray-600">Skvělá práce! 🎉</p>
              </div>

              {!nickname ? (
                <>
                  <input
                    type="text"
                    placeholder="Zadej přezdívku (dobrovolné)"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveScore}
                      disabled={!nickname.trim()}
                      className="flex-1 bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 disabled:bg-gray-400 transition"
                    >
                      Uložit do leaderboardu
                    </button>
                    <button
                      onClick={onClose}
                      className="flex-1 bg-gray-300 text-gray-800 py-2 rounded font-bold hover:bg-gray-400 transition"
                    >
                      Bez uložení
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center text-green-600 font-bold">
                  ✅ Uloženo! Děkujeme za hru!
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameModal;
