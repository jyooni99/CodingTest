function solution(n) {
    const pattern = '수박';
    return pattern.repeat(Math.ceil(n / 2)).slice(0, n);
}