function solution(numbers) {
    numbers.sort((a, b) => b - a);
    
    const pos = numbers.at(0) * numbers.at(1);
    const neg = numbers.at(-1) * numbers.at(-2);
    
    return pos > neg ? pos : neg;
}