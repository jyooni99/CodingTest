function solution(number, limit, power) {
    let count;
    let answer = 0;
    
    for(let num = 1; num <= number; num++){
        count = 0;
        for(let div = 1; div <= Math.sqrt(num); div++){
            if(num % div === 0){
                div * div === num ? count += 1 : count += 2;
            }
            
            if(count > limit){
                count = power;
                break;
            }
        }
        answer += count;
    }
    
    return answer;
}