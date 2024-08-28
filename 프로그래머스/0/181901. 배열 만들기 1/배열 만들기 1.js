function solution(n, k) {
    let i = k;
    let answer = [];
    
    while (i <= n){
        answer.push(i);
        i += k;
    }
    
    return answer;
}