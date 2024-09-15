function solution(absolutes, signs) {
    return absolutes.reduce((acc, num, idx) => signs[idx] ? acc += num : acc -= num, 0)
}