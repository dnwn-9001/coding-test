function solution(nums) {
  const maxKind = nums.length / 2;
  let poketmonsMap = new Set(nums);

  return poketmonsMap.size > maxKind ? maxKind : poketmonsMap.size;
}