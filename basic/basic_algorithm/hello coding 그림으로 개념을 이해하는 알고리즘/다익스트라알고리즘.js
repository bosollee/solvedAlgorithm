/**
 * 다익스트라 알고리즘: 최소 시간 경로(최단 경로 아님)
 * 가중치
 * but, 음의 가중치라면 다익스트라 사용 불가능. 대신 벨만-포드 알고리즘 사용.
 *
 * 1단계: 가장 시간이 적게 걸리는 정점 찾기
 * 2단계: 이 정점의 이웃 정점에 대해 현재보다 빠른 경로가 있는지 확인, 존재한다면 시간 수정
 * 3단계: 모든 정점에 대해 작업 반복
 * 4단계: 최종 경로 계산.
 *
 * 예시:
 * 물물교환
 */

// 그래프, 가격, 부모 3개의 해시테이블 필요

// 그래프 해시 테이블
let graph = {};
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["fin"] = 1;

graph["b"] = {};
graph["b"]["a"] = 1;
graph["b"]["fin"] = 5;

graph["fin"] = {};

console.log(graph);

// 가격 해시 테이블
let costs = {};

costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = undefined;

console.log(costs);

// 부모 해시 테이블
let parents = {};

parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = undefined;

console.log(parents);

// 처리 여부 추적
let checked = [];

let node = find_lowest_cost_node(costs);
while (node) {
  let cost = costs[node];
  let neighbors = graph[node];
  for (let n in neighbors.keys()) {
    let new_cost = cost + neighbors[n];
    if (costs[n] > new_cost) {
      costs[n] = new_cost;
      parents[n] = node;
    }
  }
  checked.push(node);
  node = find_lowest_cost_node(costs);
}

// 가장 저렴한 정점 찾기
function find_lowest_cost_node(costs) {
  let lowest_cost = undefined;
  let lowest_cost_code = undefined;
  for (let node in costs) {
    let cost = costs[node];
    if (cost < lowest_cost && checked.indexOf(node) !== 0) {
      lowest_cost = cost;
      lowest_cost_code = node;
    }
  }
  return lowest_cost_code;
}
