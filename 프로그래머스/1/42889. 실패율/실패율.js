function solution(N, stages) {
    let countObj = {};
    let failObj = {};
    let total = stages.length;
    
    for(let stage of stages){
        countObj[stage] = (countObj[stage] || 0) + 1;
    }
    
    for(let key = 1; key <= N; key++){
        if(!countObj[key]){
            failObj[key] = 0;
        }else{
            let fail = countObj[key];
            failObj[key] = countObj[key] / total;
            total -= fail;
        }
        
    }
    
    return Object.entries(failObj)
        .sort((a, b) => b[1] - a[1])
        .map(([stage, fail]) => Number(stage));
    
}