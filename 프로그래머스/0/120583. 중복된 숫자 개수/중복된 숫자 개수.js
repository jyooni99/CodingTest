function solution(array, n) {
    let count = 0;
    for (let i of array){
        i === n ? count++ : 0
    }
    
    return count;
}