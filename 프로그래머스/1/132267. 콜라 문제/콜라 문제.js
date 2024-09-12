function solution(a, b, n) {
    
    let [need, get, cola] = [a, b, n];
    let bonus = 0;
    
    while(cola >= need){
        let exChanged = Math.floor(cola / need) * get;
        bonus += exChanged;
        cola = (cola % need) + exChanged;
    }
    
    return bonus;
}
