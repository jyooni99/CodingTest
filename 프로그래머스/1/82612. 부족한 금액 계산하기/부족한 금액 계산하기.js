function solution(price, money, count) {
    let result = 0;
    
    while(count !== 0){
        result += price * count;
        count--;
    }
    
    return money > result ? 0 : result - money;
}