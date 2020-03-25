/**
 * 풀이: DFS / BFS (노드 한번씩 방문, check)
 * 만약 다
 * @param {number} n
 * @param {2dimensionArray} computers
 */

function solution(n, computers) {
  let answer = 0;
  const check = [];

  for (const computer of computers) {
    check.push(false);
  }
  function DFS(index) {
    check[index] = true;
    for (let i = 0; i < computers.length; i++) {
      if (computers[index][i] === 1 && !check[i]) {
        DFS(i);
      }
    }
  }
  for (let i = 0; i < computers.length; i++) {
    if (!check[i]) {
      DFS(i);
      answer++;
    }
  }
  return answer;
}

// test
solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
]); // return 2
solution(3, [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1]
]); // return 1
