function solution(n) {
    let i = BigInt(0);
    let j = BigInt(1);
    let count = n;
    
    while(count-- > 1){
        let sum = i + j;
        i = j;
        j = sum;
    }
    
    return j % BigInt(1234567);
}
