/**
 * 풀이:
 * sort(function(a,b)=>{return b-a;}) 내림차순 배열 return.
 *
 * 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
 */

function solution(n, stages) {
  let result = [];
  let player = stages.length;

  console.log(player);

  return result;
}

// test
solution(5, [2, 1, 2, 6, 2, 4, 3, 3]); //result [3,4,2,1,5]
solution(4, [4, 4, 4, 4, 4]); //result 	[4,1,2,3]
