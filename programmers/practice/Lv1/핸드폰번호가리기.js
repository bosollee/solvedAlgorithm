function solution(phone_number) {
  let answer =
    "*".repeat(phone_number.length - 4) +
    phone_number.slice(phone_number.length - 4, phone_number.length);
  return answer;
}

// test
solution("01033334444");
solution("027778888");
