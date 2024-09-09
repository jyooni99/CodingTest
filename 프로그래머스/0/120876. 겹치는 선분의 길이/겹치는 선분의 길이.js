function solution(lines) {
    let [[s1, e1], [s2, e2], [s3, e3]] = lines;
    const len = Math.max(e1, e2, e3) - Math.min(s1, s2, s3) + 1;
    const countArr = Array(200).fill(0);
    
    lines.forEach(([start, end]) => {
        while(start < end){
            countArr[start + 100] += 1;
            start++;
        }
    });
    
    return countArr.filter(item => item > 1).length;
    
}
    