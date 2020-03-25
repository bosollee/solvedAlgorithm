function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return (a > b) - (a < b);
    } else {
      return (a[n] > b[n]) - (a[n] < b[n]);
    }
  });
  return strings;
}

// test
solution(["sun", "bed", "car"], 1);
solution(["abce", "abcd", "cdx"], 2);
