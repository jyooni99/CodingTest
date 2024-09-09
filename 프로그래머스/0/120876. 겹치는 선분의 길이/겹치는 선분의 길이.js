function solution(lines) {
    const countArr = Array(200).fill(0);
    
    lines.forEach(([start, end]) => {
        while(start < end){
            countArr[start + 100] += 1;
            start++;
        }
    });
    
    return countArr.filter(item => item > 1).length;
    
}
    