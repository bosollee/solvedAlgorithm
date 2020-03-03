/**
 * 풀이:
 * 각 학생의 패턴별로 비교, 점수 push, 최고점 Math.max(...score), 최고점수 학생 정렬.
 * 주의:
 * 가장 높은 점수가 여럿이면 오름차순 정렬이므로, 순서대로 push.
 */

function solution(answers) {
    let first = [1,2,3,4,5];
    let second = [2,1,2,3,2,4,2,5];
    let third = [3,3,1,1,2,2,4,4,5,5];

    let first_score = 0;
    let second_score = 0;
    let third_score = 0;

    let score = [];

    for (let i = 0; i < answers.length; i++) {
        if(answers[i] === first[i%5]) {
            first_score++;
        } if(answers[i] === second[i%8]) {
            second_score++;
        } if(answers[i] === third[i%10]) {
            third_score++;
        }
    }
    score.push(first_score);
    score.push(second_score);
    score.push(third_score);
    
    let max = Math.max(...score);
    let result = [];

    if(score[0] == max) {
        result.push(1);
    }
    if(score[1] == max) {
        result.push(2);
    }
    if(score[2] == max) {
        result.push(3);
    }
    return result;
}

// test
console.log(solution([2,2,3,4,5]));
console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,2,4,2]));