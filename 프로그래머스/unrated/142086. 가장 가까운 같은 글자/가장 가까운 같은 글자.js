function solution(s) {
  let answer = [];
  let word = "";
  for (let i = 0; i < s.length; i++) {
    if (word.indexOf(s[i]) === -1) {
      word += s[i];
      answer.push(-1);
    } else {
      answer.push(i - word.lastIndexOf(s[i]));
      word += s[i];
    }
  }
  return answer;
}


