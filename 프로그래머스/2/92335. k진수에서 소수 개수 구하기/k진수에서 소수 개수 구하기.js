function isPrime(n){
    if(n <= 1) return false;
    
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    return true;
}

function convertBase(num, base){
    const baseArr = [];
    let remainder;
    
    while(num >= base){
        
        remainder = num % base;
        baseArr.push(remainder);
        num = Math.floor(num / base);
        
    }
    baseArr.push(num);
    return baseArr.reverse().join('');
}


function solution(n, k) {
    const primes = convertBase(n, k).split('0');
    let count = 0;
    
    for(let prime of primes){
        isPrime(Number(prime)) ? count++ : count
    }
    
    return count;
}