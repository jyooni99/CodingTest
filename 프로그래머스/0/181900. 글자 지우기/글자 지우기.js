function solution(my_string, indices) {
    return [...my_string].filter((item, index) => !indices.includes(index)).join('');
}
