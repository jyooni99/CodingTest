function solution(arr, intervals) {
    let answer = [];
    
    for(let interval of intervals){
        let [start, end] = interval;
        answer.push(...arr.slice(start, end + 1));
    }
    
    return answer;
}