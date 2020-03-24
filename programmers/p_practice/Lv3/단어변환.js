/**
 * 풀이: BFS
 * 변환 가능한 word를 노드로 두고 탐색하고,
 * 변환 가능한 word간에는 간선(edge)로 연결해둔 다음,
 * 그래프 탐색 진행.
 *
 *  몇번 변환했는지 반환.
 * 방문했던 word를 중복으로 탐색하지 않도록.
 *
 * 조건:
 * 1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
 * 2. words에 있는 단어로만 변환할 수 있습니다. (중복 없음)
 * 3. 변환 불가할 경우 0 반환.
 *
 * @param {String} begin
 * @param {String} target
 * @param {array} words
 */

function BFS(search, target, words, count, result) {
  let queue = [];
  // 형제부터 우선탐색.
  for (let i = 0; i < words.length; i++) {
    let unmatch = words[i].split("").reduce((acc, cur, idx) => {
      return cur !== search[idx] ? acc + 1 : acc;
    }, 0);
    //search를 words중 하나로 바꿀 수 있는 경우.
    if (unmatch === 1) {
      if (target === words[i]) {
        // 바꾼 글자가 target인 경우 result에 추가.
        result.push(count + 1);
      }

      let clone = words.slice();
      clone.splice(1, i);
      queue.push({
        search: words[i],
        words: clone
      });
    }
  }
  // 이후 아래로 내려감.
  if (queue.length) {
    count++;
    for (let i = 0; i < queue.length; i++) {
      BFS(queue[i].search, target, queue[i].words, count, result);
    }
  }
}

function solution(begin, target, words) {
  let result = [];
  if (words.findIndex(word => word === target) < 0) {
    return 0;
  }
  BFS(begin, target, words, 0, result);
  let answer = Math.min.apply(null, result);
  console.log(answer);
  return answer;
}

solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]); // return 4
solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]); // return 0
