/**
 * Radix Sort 기수 정렬
 * 시간복잡도: O(dN), d: 가장 큰 수의 자릿수
 * 자릿수를 비교해서 정렬.
 * 문자열, 정수는 거의 다 정렬 가능, 자릿수가 없다면 정렬 못함  ex) 부동소수점
 * 같은 두 숫자의 순서가 섞이지 않는 안정 정렬.
 */

let counter = [[]];
function radixLSD(array, k) {
  let mod = 10;
  for (let i = 0; i < k; i++, mod *= 10) {
    //자릿수 10,100,1000...
    for (let j = 0; j < array.length; j++) {
      let bucket = parseInt(array[j] % mod);
      if (counter[bucket] == null) {
        counter[bucket] = [];
      }
      counter[bucket].push(array[j]);
    }

    let pos = 0;
    for (let j = 0; j < counter.length; j++) {
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          array[pos++] = value;
        }
      }
    }
  }
  return array;
}

radixLSD([125, 383, 274, 96, 0, 9, 81, 72], 3); // [0,9,72,81,96,125,274,383]
