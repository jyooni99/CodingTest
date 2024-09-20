function solution(n) {
    let count = 0;
    
    for(let i = 1; i < n; i++){
        let sum = 0;
        for(let j = i; sum < n; j++){
            sum += j;
            if(sum === n){
                count++;
                break;
            }
        }
    }
    
    return count + 1;
}