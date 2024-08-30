function solution(array) {
    let len = array.join('').length;
    let notSeven = array.join('').replaceAll(7, '').split('').length;
    
    return len - notSeven;
}