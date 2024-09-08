function solution(dots) {
    //y2 - y1 / x2 - x1
    
    let [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    
    if(Math.abs((y2 - y1) / (x2 - x1)) === Math.abs((y4 - y3) / (x4 - x3))){
        return 1;
    }else if (Math.abs((y3 - y1) / (x3 - x1)) === Math.abs((y2 - y4) - (x2 - x4))){
        return 1;
    }else if (Math.abs((y4 - y1) / (y4 - y1)) === Math.abs((y3 - y2) / (x3 - x2))){
        return 1;
    }else {
        return 0;
    }
    
}