function solution(n) {
  return Number(
    [...(n + "")]
      .sort()
      .reverse()
      .join("")
  );
}

// test
solution(118372);
