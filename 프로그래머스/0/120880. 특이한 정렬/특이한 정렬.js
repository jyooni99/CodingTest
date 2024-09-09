function solution(numlist, n) {
    numlist.sort((a, b) => {
        let diffA = Math.abs(a - n);
        let diffB = Math.abs(b - n);
        
        if(diffA === diffB){ // 차이가 같으면
            return b - a; // 더 큰 값을 앞으로 
        }
        
        return diffA - diffB; // 차이가 다르면 차이가 작은 값을 앞으로
    })
    
    return numlist;
}