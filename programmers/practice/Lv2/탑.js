/**
 * 풀이:
 * 1. 역순으로 나보다 큰 수를 만나면 그 인덱스 저장.
 * 2. 다 돌았는데 큰 수가 없다면 0 저장.
 * 3. 마지막 수는 비교할 수가 없으므로 0 추가.
 * 4. 순서 다시 역순으로 변환.
 * @param {array} heights
 */
function solution(heights) {
  const rev_heights = heights.slice().reverse();

  let result = [];
  for (let i = 0; i < rev_heights.length; i++) {
    if (i >= 1) {
      for (let j = i; j < rev_heights.length; j++) {
        if (rev_heights[i - 1] < rev_heights[j]) {
          result.push(rev_heights.length - j);
          break;
        }
        if (result[i] === undefined && j == rev_heights.length - 1) {
          result.push(0);
        }
      }
    }
  }
  result.push(0);
  result.reverse();
  return result;
}

// test
solution([6, 9, 5, 7, 4]);
solution([3, 9, 9, 3, 5, 7, 2]);
solution([1, 5, 3, 6, 7, 6, 5]);
