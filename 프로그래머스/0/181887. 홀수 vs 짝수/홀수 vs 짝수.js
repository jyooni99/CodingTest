function solution(num_list) {
    let oddSum = 0;
    let evenSum = 0;
    
    num_list.forEach((num, idx)=>{
        idx % 2 === 0 ? evenSum += num : oddSum += num;
    });
    
    return evenSum > oddSum ? evenSum : oddSum
}