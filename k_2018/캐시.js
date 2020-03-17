/**
 * 풀이:
 * 입력 형식 - cacheSize 정수, cities 문자열 배열.(대소문자 구별 x).
 * 출력 형식 - 입력된 도시이름 배열을 순서대로 처리할 때, 총 실행시간 출력.
 * 주의:
 * 캐시 교체 알고리즘은 LRU(Least Recently Used) 사용
 * cache hit일 시, 실행시간 1. cache miss일 시, 실행시간 5
 */

// LRU 모르겠음 나중에 다시 공부.
function LRU(cacheSize, cities) {
  let cache = [];
  let result = 0;

  if (cacheSize === 0) {
    // cache miss일 시, 실행시간 5
    result = 5;
  }

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase(); // 대소문자 구별 x
    if (cache.indexOf(city) !== -1) {
      // cache hit
      result++;
      cache.splice(cache.indexOf(city), 1); // hit된 도시는 배열에서 제거.
      cache.push(city); // 마지막에 hit city push
    } else {
      // cache miss
      if (cache.length < cacheSize) {
        // 도시 수가 적으면 push
        cache.push(city);
      } else {
        cache.shift(); // 가장 마지막에 사용된 페이지 제거.
        cache.push(city); // 새로운 페이지 추가.
      }
      result += 5;
    }
  }

  return result;
}

function solution(cacheSize, cities) {
  var answer = 0;
  return answer;
}

// test
solution(3, [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA"
]); // return 50
console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA"
  ])
);
