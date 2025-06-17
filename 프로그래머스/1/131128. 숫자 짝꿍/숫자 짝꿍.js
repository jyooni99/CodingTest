function solution(X, Y) {
    const countX = Array.from({length:10}, () => 0);
    const countY = Array.from({length:10}, () => 0);
    
    // 각각 숫자의 출현 빈도를 계산
    for(const num of X){
        countX[num]++;
    }
    
    for (const num of Y){
        countY[num]++;
    }
    
    // X와 Y에 공통으로 나타나는 숫자 카운트
    const countMatch = [];
    
    for (let i = 9; i >= 0; i--){
        // X에 1이 2개, Y에 1이 3개면 짝지을 수 있는 1은 2개
        const match = Math.min(countX[i], countY[i]); 
        
        // 공통된 숫자가 있다면, 공통으로 나타나는 횟수만큼 i를 배열에 추가
        if (match !== 0){
            for (let j = 0; j < match; j++){
               countMatch.push(i);
            }
        }
    }
    
    // 조건에 따라 값 반환
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