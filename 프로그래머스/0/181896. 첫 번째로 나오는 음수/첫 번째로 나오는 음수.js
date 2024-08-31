function solution(num_list) {
    let negArr = num_list.filter(val => val < 0);
    return negArr.length > 0 ? num_list.indexOf(negArr[0]) : -1;
}