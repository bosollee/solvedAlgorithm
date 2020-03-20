/**
 * @param {array} genres
 * @param {array} plays
 */

function solution(genres, plays) {
  let list = genres.reduce((hash, g, i) => {
    if (!hash[g]) {
      // Object에 key(plays, music)에 넣음
      hash[g] = { plays: plays[i], music: [] };
    } else {
      // 장르별 총 플레이수 더하기
      hash[g].plays += plays[i];
    }
    // 장르별로 음악 넣기
    hash[g].music.push([i, plays[i]]);
    return hash;
  }, {});

  let answer = [];
  // 장르별 총 플레이수 기준으로 내림차순 정렬
  let sorted = Object.values(list).sort((l, r) => r.plays - l.plays);

  // Object의 장르별 music의 플레이수 기준으로 정렬
  sorted.forEach(g => {
    if (g.music.length > 1) {
      g.music.sort((l, r) => {
        // 재생횟수가 큰 게 앞에 있다면 그대로
        if (l[1] > r[1]) {
          return -1;
        }
        // 재생횟수가 작은 게 앞에 있다면 정렬
        else if (l[1] < r[1]) {
          return 1;
        }
        // 재생횟수가 같다면 고유번호 낮은 순으로 정렬
        else {
          return l[0] > r[0] ? 1 : -1;
        }
      });
      // 정렬한 순서대로 결과 배열에 push.
      answer.push(g.music[0][0]);
      answer.push(g.music[1][0]);
    } else {
      answer.push(g.music[0][0]);
    }
  });

  return answer;
}

// test
solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
); // return [4, 1, 3, 0]
