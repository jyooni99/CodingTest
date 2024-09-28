function solution(n, arr1, arr2) {
    let binaryArr1 = arr1.map(val => val.toString(2).padStart(n, '0'));
    let binaryArr2 = arr2.map(val => val.toString(2).padStart(n, '0'));
    
    return binaryArr1.map((binary1, idx) => {
        let binary2 = binaryArr2[idx];
        
        return [...binary1].map((bi1, idx) => {
            let bi2 = [...binary2][idx];
            return bi1 == 0 && bi2 == 0 ? ' ' : '#'
        }).join('')
    });
}