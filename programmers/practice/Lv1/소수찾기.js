// 소수 구하기: 에라토스테네스의 체
function PrimeNumber(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    arr[i] = i;
  }
  for (let i = 2; i <= n; i++) {
    if (arr[i === 0]) continue;
    for (let j = i + i; j <= n; j += i) {
      arr[j] = 0;
    }
  }
  let answer = [];
  for (let i = 0; i <= n; i++) {
    if (arr[i] !== 0 && arr[i] !== undefined) {
      answer.push(i);
    }
  }
  return answer;
}

function useSet(n) {
  const set = new Set();
  for (let i = 2; i <= n; i++) {
    set.add(i);
  }
  for (let i = 2; i <= n; i++) {
    for (let j = 2 * i; j <= n; j += i) {
      set.delete(j);
    }
  }
  return set;
}

function solution(n) {
  let count = PrimeNumber(n).length;
  let count_ = useSet(n).size;

  return console.log(count, count_);
}

// test
solution(10);
solution(100);
solution(1000);
solution(10000);
solution(100000);
