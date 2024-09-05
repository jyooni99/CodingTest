function solution(s) {
    let strArr = s.split('');
    let answer = [];
    
    strArr.forEach((char, idx) => {
        if(idx === 0) answer.push(-1);
        else{
            let lastIdx = strArr.lastIndexOf(char, idx - 1);
            answer.push(lastIdx === -1 ? -1 : idx - lastIdx);
        }
    })
    
    return answer;
}