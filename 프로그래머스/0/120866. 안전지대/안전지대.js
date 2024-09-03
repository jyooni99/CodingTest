function solution(board) {
    let n = board.length;
    let count = 0;
    let findDanger = Array.from({length: n},() => Array(n).fill(0));
    let danger = [[-1, -1], [-1, 0], [-1, 1], 
                  [0, -1], [0, 0], [0, 1], 
                  [1, -1], [1, 0], [1, 1]];
    
    for(let x = 0; x < n; x++){
        for(let y = 0; y < n; y++){
            if(board[x][y] === 1){
                danger.forEach(([dx, dy]) => {
                    let dangerX = x + dx;
                    let dangerY = y + dy;
                    
                    if(dangerX >= 0 && dangerX < n && dangerY >= 0 && dangerY < n){
                        findDanger[dangerX][dangerY] = 1;
                    }
                })
            }
        }
    }
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(findDanger[i][j] === 1){
                count++;
            }
        }
    }
    
    return (n * n) - count;
}

// 3,2 => 2,1