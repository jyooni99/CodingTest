function solution(n) {
    let countNum = (num) => [...num.toString(2)].reduce((acc, n) => n === '1'? acc += 1 : acc, 0);
    
    let count1 = countNum(n);
    let num = n + 1;
    
    while(true){
        let count2 = countNum(num);
        
        if(count1 === count2){
            return num;
        }
        num++;
    }
}