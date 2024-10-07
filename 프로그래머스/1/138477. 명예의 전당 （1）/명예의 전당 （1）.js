function solution(k, score) {
    let rank = [];
    let lowerArr = [];
    
    for(let i = 0; i < score.length; i++){
        if(i < k){
            rank.push(score[i]);
            lowerArr.push(Math.min(...rank));
        }else{
            rank.sort((a, b) => b - a);
            if(score[i] > rank[k - 1]){
                rank.pop();
                rank.push(score[i]);
            }
            lowerArr.push(Math.min(...rank));
        }
    }
    
    return lowerArr;
}