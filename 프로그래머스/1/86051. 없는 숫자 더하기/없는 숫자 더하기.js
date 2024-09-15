function solution(numbers) {
    const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return numArr.reduce((acc, num, idx) => !numbers.includes(num) ? acc+= num : acc, 0)
}