function solution(sides) {
    return (sides[0] + sides[1]) - (Math.abs(sides[0] - sides[1]) + 1);
    
    
    // 1. sides[0] + sides[1] => 나머지 한 변의 범위 max값
    // 2. Math.abs(sides[0] - sides[1]) + 1 => 나머지 한 변의 범위 min값
    
    
}