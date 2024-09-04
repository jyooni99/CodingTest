function solution(n) {
    let num = 0; // 10진법
    let noThree = 0; //3x 마을에서 쓰는 숫자
    
    //10진법과 n이 같아질 때까지 반복
    while(num < n){
        noThree ++;
        
        //3의 배수 또는 문자열에 3이 들어가 있으면 num을 더하지 않음
        if(noThree % 3 === 0 || String(noThree).includes('3')){
            continue;
        }
        
        num++;
    }
    
    return noThree;
}