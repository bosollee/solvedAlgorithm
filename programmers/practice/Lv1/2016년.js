function solution(a, b) {
  let day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let result_day = 0;

  for (let i = 0; i < a - 1; i++) {
    result_day += date[i];
  }
  result_day += b - 1;
  return day[result_day % 7];
}

// test
solution(5, 24);
