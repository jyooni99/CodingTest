function solution(s) {
    let num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let str = '';
    let answer = '';
    
    for(let char of s){
        if(!isNaN(parseInt(char))){
            answer += char;
        }else{
            str += char;
            if(num.includes(str)){
                answer += num.indexOf(str);
                str = '';
            }
        }

    }
    
    return Number(answer);
}