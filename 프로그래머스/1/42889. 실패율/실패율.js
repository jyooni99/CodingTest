function solution(N, stages) {
    let challengers = Array(N + 2).fill(0);
    let failObj = {};
    let total = stages.length;
    
    for(let stage of stages){
        challengers[stage] += 1;
    }
    
    for(let i = 1; i <= N; i++){
        if(challengers[i] === 0){
            failObj[i] = 0;
            continue
        }
        failObj[i] = challengers[i] / total;
        total -= challengers[i];
    }
    
    return Object.entries(failObj)
        .sort((a, b) => b[1] - a[1])
        .map(([stage, fail]) => Number(stage));
    
}