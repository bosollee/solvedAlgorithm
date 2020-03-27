/**
 * 풀이:
 * 두 배열 합쳐서 map(), 이진수화 한 뒤 toString(2)
 * /0/g는 '', /1/g는 '#'으로 replace() return.
 */
function solution(n, arr1, arr2) {
  let result = arr1.map((a, i) =>
    (a | arr2[i])
      .toString(2)
      .padStart(n, 0)
      .replace(/0/g, " ")
      .replace(/1/g, "#")
  );
  return result;
}

// test
solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);
