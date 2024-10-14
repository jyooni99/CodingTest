function solution(s) {
    let strArr = s.split('');
    let count = 0;
    
    function isVaild(arr){
        let stack = [];
        for(let char of arr){
            if(char === '[' || char === '(' || char === '{'){
                stack.push(char);
            }else{
                let last = stack.pop();
                if(!((last === '[' && char === ']') ||
                     (last === '(' && char === ')') ||
                     (last === '{' && char === '}'))){
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
    
    for(let i = 0; i < strArr.length; i++){
        if(isVaild(strArr)){
            count++;
        }
        strArr.push(strArr.shift());
    }
    
    return count;
}