/**
 * 2020-03-23
 * @param {String} numbers
 * @param {number} number
 */

// 1. 순열 구하는 함수
// function permutation(n, r) {
//   let result = 1;
//   for (let i = r; i <= n; i++) {
//     console.log(n, r, i, result);
//     result *= i;
//   }
//   return result;
// }

// // 2. 소수 판별 함수: 소수 아닐 경우 false, 소수일 경우 true 반환.
// function isPrime(n) {
//   if (n === 0 || n === 1) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function solution(numbers) {
//   let answer = 0;

//   // 문자열을 배열로 spread.
//   let n = [...numbers];
//   // Set 사용하여 중복 방지.
//   let nums = new Set();

//   // 짝지어주기
//   let result = [];
//   function permutation()
//   n.map((v, i, arr) => {
//     for (let j = 0; j < n.length; j++) {
//       result.push(v + n[j]);
//     }
//   });
//   console.log(result, "result");

//   // 순열 구해서 각 수마다 소수 판별 후, 소수인 것만 추가.
//   for (let i = 0; i < n.length; i++) {
//     nums.add();
//   }

//   return answer;
// }

// test
solution("17"); // return 3
solution("011"); // return 2
