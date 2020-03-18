/*
 * 풀이:
 * 총 3번 기회. 0 ~ 10점
 * S: 1제곱 D: 2제곱 T: 3제곱
 * *: 전 점수, 지금 점수 2배, ** 4배
 * #: 지금 점수 마이너스, *#마이너스 2배
 *
 * 주의:
 * 숫자가 두자리일 경우.
 */

// function solution(dartResult) {
//   let score = [];

//   for (let i = 0; i < dartResult.length; i++) {
//     if (Number(dartResult[i])) {
//       //숫자라면
//       if (Number(dartResult[i] + dartResult[i + 1])) {
//         // 두자리라면(점수 10)
//         score.push(10);
//         // i++;
//       } else {
//         // 한자리라면
//         score.push(Number(dartResult[i]));
//       }
//     } else {
//       //숫자가 아니라면 S, D, T
//       if (dartResult[i] === "S") {
//         // score[i] = score[i];
//         console.log(score[i - 2]);
//       }
//       if (dartResult[i] === "D") {
//       }
//       if (dartResult[i] === "T") {
//       }
//     }

//계산
// if (score.length === cal.length) {
//   //   pow.push(Math.pow(score[i], cal[i]));
//   //   console.log("i: ", i, "pow: ", pow);
// }

// * 2배, # 마이너스
// if (dartResult[i] === "*") {
//   score[i] = Number(score[i]) * 2;
//   score[i - 1] = Number(score[i - 1]) * 2;
// }
// if (dartResult[i] === "#") {
//   score[i] = Number(score[i]) * -1;
// }
//   }
//   return score;
// }

solution("10S2D*10S");
// solution("1S2D*3T");
// solution("1D2S#10S");
// solution("1D2S0T");
// solution("1S*2T*3S");
// solution("1D#2S*3S");
// solution("1T2D3D#");
// solution("1D2S3T*");
