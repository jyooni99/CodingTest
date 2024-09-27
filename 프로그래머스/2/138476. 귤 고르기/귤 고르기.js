function solution(k, tangerine) {
    let tangerineObj = {};
    let tangerineSum = 0;
    let count = 0;
    
    tangerine.forEach(size => {
        tangerineObj[size] = (tangerineObj[size] || 0 ) + 1;
    });
    
    const tangerineArr = Object.values(tangerineObj).sort((a, b) => b - a);
    
    for(let tan of tangerineArr){
        if(tangerineSum < k){
            tangerineSum += tan;
            count++;
        }else{
            break;
        }
    }
    
    return count;
}