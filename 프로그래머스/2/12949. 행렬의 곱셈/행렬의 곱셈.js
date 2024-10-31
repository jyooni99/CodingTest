function solution(arr1, arr2) {
    let answer = [];
    
    for(let i = 0; i < arr1.length; i++){
        let rows = [];
        for(let j = 0; j < arr2[0].length; j++){
            let sum = 0;
            for(let k = 0; k < arr2.length; k++){
                sum += arr1[i][k] * arr2[k][j];
            }
            rows.push(sum);
        }
        answer.push(rows);
    }
    
    return answer;
}



// arr1[0][0] * arr2[0][0] + arr1[0][1] * arr2[1][0] + arr1[0][2] * arr[2][0]
// arr1[0][0] * arr2[0][1] + arr1[0][1] * arr[1][1] + arr[0][2] * arr[2][1]
// arr1[0][0] * arr2[0][2] + arr1[0][1] * arr[1][2] + arr[0][2] * arr[2][2]