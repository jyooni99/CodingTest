function solution(t, p) {
    const target = Number(p);
    const index = p.length;
    const len = t.length - index;
    let count = 0;
    
    for (let i = 0; i <= len; i++){
        let num = Number(t.slice(i, index + i));
        if(num <= target){
            count++
        }
    }
    
    return count;
}

7 - 1