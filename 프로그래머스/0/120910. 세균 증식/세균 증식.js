function solution(n, t) {  
    let i = 0;
    let answer = n;
    while(i < t){
        answer = n *= 2
        i++;
    }
    
    return answer;
}