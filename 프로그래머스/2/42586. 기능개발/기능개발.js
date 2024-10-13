function solution(progresses, speeds) {
    let queue = progresses.map((program, i) => Math.ceil((100 - program) / speeds[i]));
    let answer = [];
    
    let target = queue[0];
    let count = 0;
    
    while(queue.length){
        if(target >= queue[0]){
            count++;
            queue.shift();
            if(queue.length === 0){
                answer.push(count);
            }
        }else{
            answer.push(count);
            target = queue[0];
            count = 0;
        }
    }
    
    return answer;
}