function solution(n) {
    let dp = [0, 1, 2];
    const mod = 1000000007;
    
    for(let i = 3; i <= n; i++){
        dp[i] = (dp[i - 2] + dp[i - 1]) % mod;
    }
    
    return dp[n];
}


// 1 -> 1
// 2 -> 2
// 3 -> 3
// 4 -> 5
// 5 -> 8