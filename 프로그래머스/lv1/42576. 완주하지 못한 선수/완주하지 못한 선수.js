function solution(participant, completion) {
    let answer = '';
    let participantMap = new Map();
    
    for(let p of participant){
        participantMap.get(p) ? participantMap.set(p, participantMap.get(p)+1) : participantMap.set(p, 1)
    }
    
    for(let c of completion){
        if(participantMap.get(c)) participantMap.set(c, participantMap.get(c)-1)
    }
    
     participantMap.forEach((value, key) => {
        if (value === 1) answer = key;
      });
    
    return answer;
}