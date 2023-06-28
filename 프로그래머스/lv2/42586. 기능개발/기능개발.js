function solution(progresses, speeds) {
  let answer = [];
  let days = [];

  for (let i = 0; i < progresses.length; i++) {
    const task = 100 - progresses[i];
    task % speeds[i] > 0
      ? days.push(Math.floor(task / speeds[i]) + 1)
      : days.push(task / speeds[i]);
  }

  for (let i = 0; i < days.length; i++) {
    if (days[i] < days[i + 1] || i === days.length - 1) answer.push(1);
    else if (days[i] >= days[i + 1]) {
      const findIndex = days.findIndex((day) => day > days[i]);
      if (findIndex !== -1) {
        const num = findIndex - i;
        answer.push(num);
        i = i + num - 1;
      } else {
          answer.push(days.length - i);
          return answer;
      }
    }
  }

  return answer;
}
