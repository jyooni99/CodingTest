function solution(absolutes, signs) {
    return absolutes.reduce((acc, num, idx) => signs[idx] === true ? acc += num : acc -= num, 0)
}