function solution(num_list, n) {
    return num_list.filter((val, idx) => idx % n === 0);
}