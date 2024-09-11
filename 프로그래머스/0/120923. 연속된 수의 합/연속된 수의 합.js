function solution(num, total) {
    let i = total;
    
    while(true){
        let sub = total;
        
        for(let n = 0; n < num; n++) {
            sub -= i + n;
        }
        
        if(sub === 0) {
            break;
        }
        
        i--;
    }
    
    return Array(num).fill(0).map((_, idx) => idx + i);
}