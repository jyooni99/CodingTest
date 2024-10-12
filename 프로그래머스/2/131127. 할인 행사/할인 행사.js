function solution(want, number, discount) {
    let count = 0;
    
    let wantMap = new Map();
    want.forEach((product, i) => {
        wantMap.set(product, number[i]);
    });
    
    let discountMap = new Map();
    for(let i = 0; i < 10; i++){
        let product = discount[i];
        discountMap.set(product, (discountMap.get(product) || 0 ) + 1);
    };
    
    // 상품 검사하기
    function isMatch(){
        for(let product of want){
            if(wantMap.get(product) !== discountMap.get(product)){
                return false;
            }
        }
        return true;
    }
    
    // 조건 확인하기
    for(let i = 10; i <= discount.length; i++){
        if(isMatch()){
            count++;
        }
        
        // discount.length일 때는 discountMap을 추가 및 삭제하지 않고, 비교만 실행
        if(i < discount.length){
            discountMap.set(discount[i], (discountMap.get(discount[i]) || 0) + 1);
            discountMap.set(discount[i - 10], (discountMap.get(discount[i - 10]) - 1));

            if(discountMap.get(discount[i - 10]) === 0){
                discountMap.delete(discount[i - 10]);
            }   
        }
    }
    
    return count;
}