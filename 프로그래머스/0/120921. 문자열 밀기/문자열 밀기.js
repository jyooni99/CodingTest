function solution(A, B) {
    let pushArr = [A];
    let str = [...A];
    
    for(let i = 0; i < A.length - 1; i++){
        str.unshift(str.pop());
        pushArr.push(str.join(''));
    }
    
    return pushArr.indexOf(B);
}