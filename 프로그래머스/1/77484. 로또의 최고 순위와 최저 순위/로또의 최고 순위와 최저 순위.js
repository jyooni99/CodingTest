function solution(lottos, win_nums) {
    let winCount = 0;
    let zeroCount = 0;
    const rank = [6, 6, 5, 4, 3, 2, 1];
    
    for (const num of lottos){
        if (num === 0){
            zeroCount++;
        }else{
            if (win_nums.includes(num)){
                winCount++
            }   
        }
    }
    
    return [rank[winCount + zeroCount], rank[winCount]]
    
    console.log(winCount);
    console.log(zeroCount);
    console.log(rank[zeroCount])
    
    // lottos를 순회하면서 값이 일치하는 횟수 저장
    // 최대 일치: 일치 횟수 + 0의 개수
    // 최소 일치: 일치 횟수
}