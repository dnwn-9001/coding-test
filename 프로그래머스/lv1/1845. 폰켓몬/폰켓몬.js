function solution(nums) {
  const maxKind = nums.length / 2;
  let poketmonsSet = new Set(nums);

  return poketmonsSet.size > maxKind ? maxKind : poketmonsSet.size;
}