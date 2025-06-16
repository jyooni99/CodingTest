function solution(A,B){
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    
    return A.reduce((acc, cur, idx) => acc += cur * B[idx],0)
}