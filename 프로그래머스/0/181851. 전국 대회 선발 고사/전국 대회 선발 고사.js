function solution(rank, attendance) {
    let trueArr = rank
    .filter((item, idx) => {return attendance[idx] === true})
    .sort((a, b) => a - b);
    
    return rank.indexOf(trueArr[0]) * 10000 + rank.indexOf(trueArr[1]) * 100 + rank.indexOf(trueArr[2]);
}