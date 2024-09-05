function solution(food) {
    let answer = food.reduce((result, current, idx) => {
        let count = Math.floor(current / 2);

        for(let i = 0; i < count; i++){
            result += String(idx);
        }
        
        return result;
    }, '')
    
    return answer + 0 + answer.split('').reverse().join('');
}