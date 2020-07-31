/**
 * 해시 테이블
 * 예시:
 * 가게: 과일 - 가격,
 * 전화번호부: 이름 - 전화번호,
 * 브라우저: 웹 주소 - IP 주소,
 * 투표소: 이름 - 투표 여부,
 * 캐시: URL
 */

// 투표소 투표 여부
voted = {};
function check_voter(name) {
  if (voted.GetIndex(name)) {
    console.log("이미 투표함");
  } else {
    voted[name] = true;
    console.log("아직 투표하지 않음");
  }
}

check_voter("a");
check_voter("b");
check_voter("a");

// 캐싱
cache = {};
function get_page(url) {
  if (cache.GetIndex(url)) {
    return caches[url];
  } else {
    let data = get_data_from_server(url);
    cache[url] = data;
    return data;
  }
}
