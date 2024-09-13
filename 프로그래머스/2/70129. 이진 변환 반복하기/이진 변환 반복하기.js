function solution(s) {
    let [bCount, zCount] = [0, 0];
    let str = s;
    
    while(str !== '1'){
        zCount += str.replaceAll(/1/g, '').length;
        str = str.split('0').join('').length.toString(2);
        bCount++;
    }
    
    return [bCount, zCount];
}