function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let total_truck_weight = 0;
  let bridge_queue = [],
    weight_queue = [];

  //while(truck_weights.length > 0) {
  do {
    for (let i in bridge_queue) {
      bridge_queue[i]--;
    }
    if (bridge_queue[0] == 0) {
      total_truck_weight -= weight_queue.shift();
      bridge_queue.shift();
    }
    if (total_truck_weight + truck_weights[0] <= weight) {
      weight_queue.push(truck_weights[0]);
      bridge_queue.push(bridge_length);
      total_truck_weight += truck_weights.shift();
    }
    answer++;
  } while (bridge_queue.length > 0);
  console.log(answer);
  return answer;
}

// test
solution(2, 10, [7, 4, 5, 6]); // return 8
// solution(100, 100, [10]); // return 101
// solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]); // return 110
