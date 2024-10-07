function solution(k, score) {
    let rank = [];
    let lowerArr = [];
    
    for(let i = 0; i < score.length; i++){
        rank.push(score[i]);
        rank.sort((a, b) => b - a);
        
        if(i < k){
            lowerArr.push(rank[rank.length - 1]);
        }else{
            lowerArr.push(rank[k - 1]);
        }
    }
    
    return lowerArr;
}