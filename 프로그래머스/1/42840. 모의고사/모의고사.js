function solution(answers) {
    let count = [0, 0, 0];
    let [s1, s2, s3] = ['12345', '21232425', '3311224455'];
    
    answers.forEach((answer, idx) => {
        answer = answer.toString();
        if(s1[idx % s1.length] === answer) count[0]++;
        if(s2[idx % s2.length] === answer) count[1]++;
        if(s3[idx % s3.length] === answer) count[2]++;
    });
    
    // 최대 점수 반환
    let maxScore = Math.max(...count);
    
    return count
        .map((score, idx) => maxScore === score ? idx + 1 : null) // 최대 점수만 남기고 Null로 변환
        .filter(score => score !== null); // null 제거
}