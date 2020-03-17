/**
 * 풀이:
 * 이게 뭔 문젠지 사실 모르겠음
 * 뭔소리야..
 * 주의:
 */

function solution(citations) {
  citations.sort();
  console.log(citations);
  let h = citations[citations.length - 1]; // h가 왜 6이야????
  console.log(h);
}

// 1. 틀린 풀이
// function solution(citations) {
//   let result = 0;
//   let count = 0;
//   for (let i = 0; i < citations.length; i++) {
//     for (let j = 0; j < citations.length; j++) {
//       if (citations[i] <= citations[j] === true) {
//         // 3보다 크거나 같다면 (3,6,5)
//         count++;
//         if (count === citations[i] && count !== 0) {
//           // h가 같다면 return
//           return count;
//         }
//       }
//     }
//   }
// }

// test
solution([3, 0, 6, 1, 5]); // return 3
console.log(solution([3, 0, 6, 1, 5]));
