function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    let xRange = parseInt(board[0] / 2);
    let yRange = parseInt(board[1] / 2);
    
    keyinput.forEach((val, idx) => {
        if(val === 'left'){
            if(x >  -xRange){x--;}
        }else if(val === 'right'){
            if(x < xRange){x++;}
        }else if(val === 'up'){
            if(y < yRange){y++}
        }else{
            if(y > -yRange){y--;}
        }
    })
    
    return [x, y];
}