/**
 * 풀이:
 * 이중 for문으로 직사각형 별 만들기.
 * 주의:
 * 표준 입력 방식으로 주어짐.
 */

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    let star = '';
    const a = Number(n[0]), b = Number(n[1]);
    for (let i = 0; i < b; i++) {
        for (let j = 0; j < a; j++) {
            star += '*';
        }star += '\n';
    }
    console.log(star);
});