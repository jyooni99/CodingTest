function isPrime(n){
    if(n === 1) return false;
    
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    return true;
}


function solution(n, k) {
    const primes = n.toString(k).split('0');
    let count = 0;
    
    console.log(primes);
    
    for(let prime of primes){
        if(prime === '') continue;
        isPrime(Number(prime)) ? count++ : count
    }
    
    return count;
}