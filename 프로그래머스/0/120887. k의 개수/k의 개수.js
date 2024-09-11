function solution(i, j, k) {
    let count = 0;
    const kStr = k.toString();

    for (let num = i; num <= j; num++) {
        let numStr = num.toString();
        for (let char of numStr) {
            if (char === kStr) {
                count++;
            }
        }
    }

    return count;
}
