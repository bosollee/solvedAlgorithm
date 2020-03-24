/**
 * 풀이:
 * split(' ') 공백으로 단어 나눈 뒤, map으로 매핑, join(' ')으로 문자열 return.
 * 주의:
 * 짝홀 if문 대소문자 toUpperCase, toLowerCase
 */

function solution(s) {
    return s.split(' ').map(word => {
        let result = '';
        for(let i = 0; i < word.length; i++) {
            if(i%2) {
                result += word[i].toLowerCase();
            } else {
                result += word[i].toUpperCase();
            }
        }
        return result;
    }).join(' ');
}

// test
solution('try hello world');