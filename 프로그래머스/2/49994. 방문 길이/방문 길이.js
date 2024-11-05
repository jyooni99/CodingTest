function solution(dirs) {
    let direction = {U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0]};
    let now= [0, 0];
    let move = new Set();
    
    
    for(let dir of dirs){
        let newX = now[0] + direction[dir][0];
        let newY = now[1] + direction[dir][1];
        
        if(Math.abs(newX) > 5 || Math.abs(newY) > 5) continue;
        move.add(`${now} - ${newX},${newY}`);
        move.add(`${newX},${newY} - ${now}`);
        
        now = [newX, newY];
    }
    
    return move.size / 2;
}