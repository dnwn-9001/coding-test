function solution(nums) {
  let answer = 0;
  const numsLength = nums.length;
  const maxKind = numsLength / 2;
  let poketmonsMap = new Map();

  for (let x of nums) {
    poketmonsMap.has(x)
      ? poketmonsMap.set(x, poketmonsMap.get(x) + 1)
      : poketmonsMap.set(x, 1);
  }

  poketmonsMap.size <= maxKind
    ? (answer = poketmonsMap.size)
    : (answer = maxKind);

  return answer;
}