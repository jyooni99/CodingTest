function solution(fees, records) {
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    const parkingLot = {};
    const priceArr = [];
    
    // 차량 번호 별로 입출차 내역 정리
    records.forEach(record => {
        const [time, carNumber] = record.split(' ');
        
        parkingLot[carNumber] = parkingLot[carNumber] || [];
        parkingLot[carNumber].push(time);
    })
    
    // 차량 번호 순으로 정렬, 값들만 배열에 저장
    const carFees = Object.entries(parkingLot).sort().map((list) => list[1]);
    
    // 시간 및 요금 계산
    for(let i = 0; i < carFees.length; i++){
        let time = 0;
        let price = 0;
        
        for(let j = 0; j < carFees[i].length; j += 2){
            let inTime = carFees[i][j];
            let outTime; 
            
            if(!carFees[i][j + 1]){
                outTime = "23:59"
            }else{
                outTime = carFees[i][j + 1]
            }
            
            const [hour1, minutes1] = inTime.split(':').map(Number);
            const [hour2, minutes2] = outTime.split(':').map(Number);
            
            const time1 = hour1 * 60 + minutes1;
            const time2 = hour2 * 60 + minutes2;
            
            time = time + time2 - time1;
        }
        
        if(time > baseTime){
            price = baseFee + Math.ceil((time - baseTime) / unitTime) * unitFee;
        }else{
            price = baseFee;
        }
        
        priceArr.push(price);
    }
    
    return priceArr;
}