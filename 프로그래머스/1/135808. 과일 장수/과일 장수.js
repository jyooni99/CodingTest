function solution(k, m, score) {
    let sorted = score.sort((a, b) => b - a);
    let min;
    let profit = 0;
    
    for(let i = 1; i <= Math.floor(sorted.length / m); i++){
        min = sorted[i * m - 1];
        profit += min * m; 
    }
    
    return profit
}