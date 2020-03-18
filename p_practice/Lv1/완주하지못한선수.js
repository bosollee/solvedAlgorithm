/*
    풀이:
    정렬하여 두 배열 비교한 뒤, 같은 인덱스에 다른 값 return
    주의:
    1. 배열값이 알파벳이므로 sort() 그대로 사용 가능
    2. completion.length는 participant.length보다 언제나 1 작음
*/

function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(let i =0; i<participant.length; i++){        
        for(let j = 0; j<completion.length; j++){        
            if( participant[i] != completion[i] ){
                return participant[i];
            }
        }
    }
}