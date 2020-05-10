/**
 * 깊이/너비 우선 탐색(DFS/BFS)
 */

function solution(n, computers) {
  let answer = 0;
  const check = [];

  for (const computer of computers) {
    check.push(false);
  }

  function DFS(index) {
    check[index] = true; // 방문
    for (let i = 0; i < computers.length; i++) {
      if (computers[index][i] === 1 && !check[i]) {
        // 간선이 있고 미방문이라면
        DFS(i); // 재귀 호출
      }
    }
  }

  for (let i = 0; i < computers.length; i++) {
    if (!check[i]) {
      // 미방문이라면
      DFS(i);
      // 네트워크 개수 추가
      answer++;
    }
  }
  return answer;
}

// test
solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]); // return 2
solution(3, [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]); // return 1
