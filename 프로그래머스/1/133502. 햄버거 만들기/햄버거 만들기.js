function solution(ingredient) {
    let count = 0;
    const stack = [];
    
    for(let i = 0; i < ingredient.length; i++){
        stack.push(ingredient[i]);
        
        if(stack.length > 3 && stack.slice(-4).join('') === '1231'){
            stack.splice(-4, 4);
            count++;
        }
    }
    
    return count;
}

