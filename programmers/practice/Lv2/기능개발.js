function solution(progresses, speeds) {
  let answer = [];

  while (progresses.length) {
    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] <= 100) {
        progresses[i] += speeds[i];
      }
    }

    let deploy = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      deploy++;
    }
    if (deploy > 0) {
      answer.push(deploy);
    }
  }
  return answer;
}

// test
solution([93, 30, 55], [1, 30, 5]); // return [2,1]
