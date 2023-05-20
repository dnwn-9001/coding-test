function solution(array, commands) {
    let answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        let sliceArr = array.slice(commands[i][0] - 1, commands[i][1]);
        for (let k = 0; k < sliceArr.length - 1; k++) {
          let idx = k;
          for (let j = k + 1; j < sliceArr.length; j++) {
            if (sliceArr[j] < sliceArr[idx]) idx = j;
          }
          [sliceArr[k], sliceArr[idx]] = [sliceArr[idx], sliceArr[k]];
        }

        answer.push(sliceArr[commands[i][2] - 1]);
      }
    
    return answer;
}