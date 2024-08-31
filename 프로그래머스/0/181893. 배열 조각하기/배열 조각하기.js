function solution(arr, query) {
    let answer = arr;
    
    query.forEach((val, idx)=>{
        if(idx % 2 === 0){
            answer = answer.slice(0, val + 1);
        }else{
            answer = answer.slice(val);
        }
    })
    
    return answer;
    
     // 짝수 인덱스에서는 arr에서 query[i]번 인덱스를 제외하고 
     // 배열의 query[i]번 인덱스 뒷부분을 잘라서 버립니다.
    
     // 홀수 인덱스에서는 arr에서 query[i]번 인덱스는 제외하고 
     // 배열의 query[i]번 인덱스 앞부분을 잘라서 버립니다.

}