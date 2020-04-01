function solution(priorities, location) {
  let target_index = location;
  let answer = 1;
  let first = 0;

  while (priorities.length > 0) {
    first = priorities.shift();
    if (priorities.some(val => val > first)) {
      priorities.push(first);
    } else {
      if (target_index === 0) break;
      else {
        answer++;
        // target_index--;
      }
    }
    if (target_index === 0) {
      target_index = priorities.length - 1;
    } else {
      target_index--;
    }
  }
  console.log(answer);
  return answer;
}

// test
solution([2, 1, 3, 2], 2); // return 1
solution([1, 1, 9, 1, 1, 1], 0); // return 5
solution([2, 3, 2, 3], 2);
