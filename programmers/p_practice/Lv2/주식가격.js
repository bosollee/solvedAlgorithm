function solution(prices) {
  let answer = [];
  for (let i = 0; i < prices.length; i++) {
    let fin = false;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] > prices[j]) {
        answer.push(j - i);
        fin = true;
        break;
      }
    }
    if (fin === false) {
      answer.push(prices.length - i - 1);
    }
  }
  console.log(answer);
  return answer;
}

// test
solution([1, 2, 3, 2, 3]); // return [4, 3, 1, 1, 0]
