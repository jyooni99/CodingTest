function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    let xRange = Math.floor(board[0] / 2);
    let yRange = Math.floor(board[1] / 2);
    
    keyinput.forEach((val) => {
        if(val === 'left' && x > -xRange) x--;
        else if(val === 'right'&& x < xRange) x++;
        else if(val === 'up' && y < yRange) y++;
        else if(val === 'down' && y > -yRange) y--;
    })
    
    return [x, y];
}