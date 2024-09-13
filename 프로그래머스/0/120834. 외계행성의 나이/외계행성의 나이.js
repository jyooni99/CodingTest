function solution(age) {
    
    let alphaArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let answer = "";
    let ageStr = age.toString(); // 1. age를 문자열로 변경
    
    for(let i = 0; i < ageStr.length; i++){
        answer += alphaArr[ageStr[i]]; //.age의 인덱스를 alphaArr와 대조
    }
    
    return answer;
}