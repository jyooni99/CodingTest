function solution(s){
    const {yCount, pCount} = [...s.toUpperCase()].reduce((acc, item) => {
        if(item === 'Y') acc.yCount++;
        else if(item === 'P') acc.pCount++;
        
        return acc;
    },{yCount: 0, pCount: 0});
    
    return yCount === pCount;
}