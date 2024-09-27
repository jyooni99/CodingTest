function solution(k, tangerine) {
    let countTangerine = Array.from({length: Math.max(...tangerine) }).fill(0);
    let sum = 0;
    
    tangerine.forEach(size => {
        countTangerine[size - 1] = (countTangerine[size - 1] || 0 ) + 1;
    });
    
    return countTangerine.sort((a, b) => b - a).reduce((count, tanCount) => {
        if(sum < k){
            sum += tanCount;
            return ++count;
        }else{
            return count;
        }},0);
    
}