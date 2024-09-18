function solution(a, b) {
    let [i, j] = a < b ? [a, b] : [b, a];
    let sum = 0;
    
    for(i; i <= j; i++){
       sum += i; 
    }
    
    return sum;
}