function solution(t, p) {
    let max = parseInt(p);
    let len = t.length - p.length + 1;
    let count = 0;
    
    for(let i = 0; i < len; i++){
        let num = parseInt(t.slice(i, i + p.length));
        if(num <= max){
            count++;
        }
    }
    
    return count;
}