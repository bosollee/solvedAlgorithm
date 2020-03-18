/**
 * 풀이:
 * 100% 완료하면 배포되므로,
 * queue
 * @param {array} progresses
 * @param {array} speeds
 */

function solution(progresses, speeds) {
  let answer = [];

  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] <= 100) {
        progresses[i] += speeds[i];
      }
    }
    let deploy_count = 0;

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      deploy_count++;
    }
    if (deploy_count > 0) {
      answer.push(deploy_count);
    }
  }
  return answer;
}

// test
solution([93, 30, 55], [1, 30, 5]); // return [2,1]
