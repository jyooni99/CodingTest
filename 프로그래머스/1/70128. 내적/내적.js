function solution(a, b) {
    return a.reduce((acc, num, idx) => {
        return acc += num * b[idx]; 
    }, 0)
}