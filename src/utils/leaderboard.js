export const saveScore = (mechanicId, score, nickname) => {
  const leaderboard = getLeaderboard();
  const entry = {
    mechanicId,
    score,
    nickname: nickname || 'Anonym',
    date: new Date().toISOString()
  };
  leaderboard.push(entry);
  localStorage.setItem('mechanicLeaderboard', JSON.stringify(leaderboard));
  return entry;
};

export const getLeaderboard = () => {
  const data = localStorage.getItem('mechanicLeaderboard');
  return data ? JSON.parse(data) : [];
};

export const getLeaderboardByMechanic = (mechanicId) => {
  return getLeaderboard()
    .filter(entry => entry.mechanicId === mechanicId)
    .sort((a, b) => b.score - a.score);
};

export const getTopScores = (limit = 10) => {
  return getLeaderboard()
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
};
