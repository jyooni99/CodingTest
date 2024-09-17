function solution(s) {
    return s
        .split(' ')
        .map((item) => {
            if(item.trim()){
                return item[0].toUpperCase() + item.slice(1).toLowerCase();
            }})
        .join(' ');
}