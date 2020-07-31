/**
 * 너비 우선 탐색
 * 시간복잡도: O(간선의 개수)
 * 최단 경로 문제 예시:
 * 친구 집까지 가는 최단 경로
 * 체스 게임 체크 메이트 만드는 최소한 수
 * 포커 친구 사이에 있는 빚
 * 이웃
 * 페이스북 친구의 친구 목록 파도타기해서 망고 판매상 찾기
 * 네트워크 탐색
 * 방법:
 * 1단계 . 문제를 그래프로 모형화한다.
 * 2단계 . 너비 우선 탐색으로 문제를 푼다.
 *
 */
function solution() {
  let graph = { you: ["a", "b", "c"] };
  console.log(graph);
}
solution();

function search(name) {
  let search_queue = [];
  search_queue += graph[name];
  let searched = []; // 이미 확인한 사람 추적

  while (search_queue) {
    let person = search_queue.shift();
    if (searched.getIndex(person) !== 0) {
      if (person_is_sellor(person)) {
        console.log(person, "is mango seller.");
        return true;
      } else {
        search_queue += graph[person];
        searched.push(person);
      }
    }
    return false;
  }
}
// search("you");
