function solution(my_string) {
    let alphaArr = [];
    let answer = Array(52).fill(0); //0인 값이 52개인 배열 생성
    
    // 알파벳리스트 생성
    for(let i = 0; i < 26; i++){
        alphaArr.push(String.fromCharCode(i + 65)); // A-Z
        alphaArr.push(String.fromCharCode(i + 97)); // a-z
    }
    alphaArr.sort();
    
    //alphaArr에서 index를 반환해, Arr[index]를 하고 값을 더함
    for (let i = 0; i < my_string.length; i++){
        let index = alphaArr.indexOf(my_string[i]);
        answer[index] += 1;
    }
    
    return answer;
}