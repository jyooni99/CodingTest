function solution(x, y, n) {
    if(x === y) return 0;
    
    const dp = new Array(y + 1).fill(Infinity);
    dp[x] = 0;
    
    for(let i = x; i <= y; i++) {
        if(i - n >= x) dp[i] = Math.min(dp[i], dp[i - n] + 1);
        if(i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        if(i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
    
    console.log(dp);
    
    return dp[y] === Infinity ? -1 : dp[y];
}