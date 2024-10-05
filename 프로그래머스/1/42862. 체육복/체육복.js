function solution(n, lost, reserve) {
    // 여벌이 있지만 도난당한 학생을 제거
    let actualLost = lost.filter(l => !reserve.includes(l));
    let actualReserve = reserve.filter(r => !lost.includes(r));

    // 체육복을 빌려주는 과정
    actualLost.sort((a, b) => a - b);  // lost 학생들을 오름차순으로 정렬
    actualReserve.sort((a, b) => a - b);  // reserve 학생들도 정렬
    
    for (let i = 0; i < actualReserve.length; i++) {
        const borrower = actualReserve[i];
        const lendIndex = actualLost.findIndex(l => l === borrower - 1 || l === borrower + 1);
        
        if (lendIndex !== -1) {
            actualLost.splice(lendIndex, 1); // 빌려준 학생은 제거
        }
    }

    // 최종 참여 학생 수는 전체 학생 수에서 여전히 체육복이 없는 학생을 제외한 값
    return n - actualLost.length;
}