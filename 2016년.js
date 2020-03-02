/*
    풀이:
    주어진 월만큼의 날짜를 더하고, 주어진 날짜를 더한 뒤, %7 하여 요일을 구한다. 
    주의:
    윤년이므로 2월은 29일.
    1월 1일은 금요일으로 주어졌기에 배열 시작은 금요일로.
*/

function solution(a, b) {
    let day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    let date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let result_day = 0;

    for (let i = 0; i < a - 1; i++) {
        result_day += date[i];
    }
    result_day += b - 1;
    return day[result_day % 7];
}

// test
solution(5, 24);