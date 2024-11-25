function solution(word) {
    const vowel = {"A":0, "E":1, "I":2, "O":3, "U":4};
    const num = [781, 156, 31, 6, 1];
    let answer = 0;
    let key;
    
    for (let i = 0; i < word.length; i++){
        key = word[i];
        answer += vowel[key] * num[i] + 1;
    }
    
    return answer;
}