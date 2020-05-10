function solution(clothes) {
  let answer = 1;
  let obj = {};
  clothes.map((cloth) => {
    obj[cloth[1]] = (obj[cloth[1]] || 1) + 1;
  });
  for (var key in obj) {
    answer *= obj[key];
  }
  return answer - 1;
}

// test
solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]); // return 5

solution([
  ["yellow_hat", "headgear"],
  ["y_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["blue_sunges", "eyewear"],
  ["green_turban", "headgear"],
  ["green_tn", "tshirts"],
  ["g_turban", "tshirts"],
]); // return 19

solution([
  ["crow_mask", "face"],
  ["blue_sunglasses", "face"],
  ["smoky_makeup", "face"],
]); // return 3
