function solution(s) {
    let strArr = s.split('');
    let stack = [];
    let count = 0;
    
    for(let i = 0; i < strArr.length; i++){
        let correct = false;
        for(let j = 0; j < strArr.length; j++){
            if(strArr[j] === '[' || strArr[j] === '(' || strArr[j] === '{'){
                stack.push(strArr[j]);
            }else{
                if((stack[stack.length - 1] === '[' && strArr[j] === ']')||
                   (stack[stack.length - 1] === '(' && strArr[j] === ')')||
                   (stack[stack.length - 1] === '{' && strArr[j] === '}')){
                    correct = true;
                    stack.pop();
                }else{
                    correct = false;
                    break;
                }
            }
        }
        if(stack.length === 0 && correct){
            count++;
        }
        strArr.push(strArr.shift());
    }
    
    return count;
}