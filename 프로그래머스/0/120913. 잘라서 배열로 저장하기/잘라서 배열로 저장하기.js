function solution(my_str, n) {
    let arr = [];
    for (let i = 0; i < my_str.length; i++){
        arr.push(my_str.substr(i, n));
        i += n - 1;
    }
    
    return arr;
}