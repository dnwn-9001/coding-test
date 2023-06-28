function solution(s) {
  let answer = true;
  let stack = [];
  let tmp1 = [];
  let tmp2 = [];
    
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? tmp1.push(s[i]) : tmp2.push(s[i]);
  }

  if (tmp1.length !== tmp2.length) answer = false;
  else {
    for (let x of s) {
        if (x === "(") stack.push(x);
        else {
          if (stack.length === 0) answer = false;
          stack.pop();
        }
      }
  }
  

  if (stack.length > 0) answer = false;
  return answer;
}
