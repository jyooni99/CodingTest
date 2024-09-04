function solution(a, b) {
    let g = 1;
    
    //최대 공약수 찾기
    for (let i = 1; i <= a; i++){
        if(a % i === 0 && b % i === 0){
            g = i;
        }
    }
    
    //약분하기
    a /= g;
    b /= g;
    
    //2와 5로만 나눠지는 수인지 판별
    while(b % 2 === 0) b /= 2;
    while(b % 5 === 0) b /= 5;
    
    return b === 1 ? 1 : 2;
}