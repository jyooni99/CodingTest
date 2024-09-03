function solution(my_string) {
    const numArr = my_string.split(/[a-zA-Z]/).filter(val => val !== '');
    
    return numArr.reduce((a, b) => a + Number(b), 0);
}