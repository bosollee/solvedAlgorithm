/*
    풀이 1: 배열 사용. 정렬하여 비교한 뒤, 같은 인덱스에 다른 값 return
    풀이 2: Object 사용.
    풀이 3: Map 사용.
*/

// 풀이 1. 배열 사용
function solution1(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    for (let j = 0; j < completion.length; j++) {
      if (participant[i] != completion[i]) {
        return participant[i];
      }
    }
  }
}

// 풀이 2: Object 사용.
function solution2(participant, completion) {
  let obj = new Object();
  for (let p of participant) {
    if (!obj[p]) {
      obj[p] = 1;
    } else {
      obj[p] += 1;
    }
  }
  for (let c of completion) {
    if (obj[c]) {
      obj[c] -= 1;
    }
  }
  for (let p of participant) {
    if (obj[p] >= 1) {
      answer = p;
    }
  }
  return answer;
}

// 풀이 3: Map 사용.
function solution3(participant, completion) {
  let map = new Map();
  for (let p of participant) {
    if (!map.get(p)) {
      map.set(p, 1);
    } else {
      map.set(p, map.get(p) + 1);
    }
  }
  for (let c of completion) {
    if (map.get(c)) {
      map.set(c, map.get(c) - 1);
    }
  }
  for (let p of participant) {
    if (map.get(p) >= 1) {
      answer = p;
    }
  }
  return answer;
}

// test
solution1(["leo", "kiki", "eden"], ["eden", "kiki"]); // return leo
solution2(
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["josipa", "filipa", "marina", "nikola"]
); //return vinko
solution3(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]); // return mislav
