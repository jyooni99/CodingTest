function solution(arr) {
    let answer = arr.filter(item => item !== Math.min(...arr));
    return answer.length !== 0 ? answer : [-1];
}