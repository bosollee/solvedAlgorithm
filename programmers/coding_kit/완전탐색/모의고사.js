/**
 * 2020-03-23
 * @param {array} answers
 */

function solution(answers) {
  let result = [];

  // 세 학생이 찍는 패턴
  let student_1 = [1, 2, 3, 4, 5];
  let student_2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let student_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 세 학생이 맞힌 문제 수
  let count_student_1 = answers.filter(
    (answer, i) => answer === student_1[i % student_1.length]
  ).length;
  let count_student_2 = answers.filter(
    (answer, i) => answer === student_2[i % student_2.length]
  ).length;
  let count_student_3 = answers.filter(
    (answer, i) => answer === student_3[i % student_3.length]
  ).length;

  // 문제를 가장 많이 맞힌 학생의 문제 수
  let max = Math.max(count_student_1, count_student_2, count_student_3);

  // 문제를 가장 많이 맞힌 학생 배열을 반환하기
  if (max === count_student_1) {
    result.push(1);
  }
  if (max == count_student_2) {
    result.push(2);
  }
  if (max == count_student_3) {
    result.push(3);
  }
  return result;
}

// test
solution([1, 2, 3, 4, 5]); // return [1]
solution([1, 3, 2, 4, 2]); // return [1,2,3]
