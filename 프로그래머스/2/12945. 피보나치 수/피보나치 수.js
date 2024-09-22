function solution(n) {
    let i = 0;
    let j = 1;
    let count = n;
    
    while(count-- > 1){
        let sum = i + j;
        i = j % 1234567;
        j = sum;
    }
    
    return j % 1234567;
}