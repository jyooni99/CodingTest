function solution(d, budget) {
    let sortD = d.sort((a, b) => (a - b));
    let sum = 0;
    let cnt = 0;
    
    for(let num of sortD){
        sum += num;
        
        if(sum <= budget) {cnt++;}
        else {break;}
    }
    
    return cnt;
}