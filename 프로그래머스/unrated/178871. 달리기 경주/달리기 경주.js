function solution(players, callings) {
  let answer = [];
  answer = Array.from(players);
  const playerMap = new Map();

  players.forEach((player, index) => {
    playerMap.set(player, index);
  });

  for (const runner of callings) {
    const runnerIndex = playerMap.get(runner);

    playerMap.set(runner, runnerIndex - 1);
    playerMap.set(answer[runnerIndex - 1], runnerIndex);

    [answer[runnerIndex - 1], answer[runnerIndex]] = [
      answer[runnerIndex],
      answer[runnerIndex - 1],
    ];
  }

  return answer;
}