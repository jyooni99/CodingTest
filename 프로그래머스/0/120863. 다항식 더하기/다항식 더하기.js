function solution(polynomial) {
    let arr = polynomial.split(' + ');
    let x = 0;
    let num = 0;
    
    arr.forEach(val => {
        if(val.indexOf('x') !== -1){
            val === 'x' ? x += 1 : x += parseInt(val);
        }else{
            num += parseInt(val);
        }
    })
    
    if (num === 0){
        if (x === 0){
            return '0';
        }else if(x === 1){
            return 'x';
        }else {
            return `${x}x`;
        }
    }else {
        if (x === 0){
            return `${num}`;
        }else if (x === 1){
            return `x + ${num}`;
        }else{
            return `${x}x + ${num}`
        }
    }
}