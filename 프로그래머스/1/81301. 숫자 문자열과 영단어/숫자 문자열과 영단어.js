function solution(s) {
    let num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let str = s;
    
    for (let i = 0; i < 11; i++){
        str = str.split(num[i]).join(i);
    }
    
    return parseInt(str);
}