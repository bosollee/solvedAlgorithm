/**
 * 풀이:
 * 1. 순서대로 큐에 넣었다가 빼줌.
 * 2. 만약 들어간 수와 다음 수의 합이 가 무게보다 적다면 시간 증가.
 *
 *
 * @param {number} bridge_length
 * @param {number} weight
 * @param {array} truck_weights
 */
function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let queue = [];
  let queueSum = 0;

  for (let i = 0; i < bridge_length; i++) {
    queue.push(0);
  }

  let now_truck = truck_weights.shift();
  queue.unshift(now_truck);
  queue.pop();
  queueSum += now_truck;
  answer++;

  while (queueSum) {
    queueSum -= queue.pop();
    now_truck = truck_weights.shift();

    if (now_truck + queueSum <= weight) {
      queue.unshift(now_truck);
      queueSum += now_truck;
    } else {
      queue.unshift(0);
      truck_weights.unshift(now_truck);
    }
    answer++;
  }
  return answer;
}
// test
solution(2, 10, [7, 4, 5, 6]); // return 8
solution(100, 100, [10]); // return 101
solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]); // return 110
