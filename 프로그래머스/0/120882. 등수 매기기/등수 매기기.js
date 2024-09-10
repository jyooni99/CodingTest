function solution(score) {
    const avg = score.map(([eng, math]) => Math.floor(eng + math) / 2);
    const avgSorted = avg.slice().sort((a, b) => b - a);
    
    return avg.map((item, idx) => avgSorted.indexOf(item) + 1);
}