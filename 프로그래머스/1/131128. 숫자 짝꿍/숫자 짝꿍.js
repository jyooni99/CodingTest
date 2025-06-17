function solution(X, Y) {
    const countX = Array.from({length:10}, () => 0);
    const countY = Array.from({length:10}, () => 0);
    
    // 각각 숫자의 빈도를 계산
    for(const num of X){
        countX[num]++;
    }
    
    for (const num of Y){
        countY[num]++;
    }
    
    // 공통으로 나타나는 숫자 카운트
    const countMatch = [];
    
    for (let i = 9; i >= 0; i--){
        const match = Math.min(countX[i], countY[i]);
        
        if (match !== 0){
            for (let j = 0; j < match; j++){
               countMatch.push(i);
            }
        }
    }
    
    console.log(countMatch)
    
    
    if (countMatch.length === 0){
        return '-1'
    }else{
        if (countMatch.every(num => num === 0)){
            return '0'
        }else{
            return countMatch.join('');
        }
    }
}