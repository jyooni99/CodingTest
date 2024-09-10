function solution(babbling) {
    let talking = new RegExp(/aya|ye|woo|ma/, "g");
    
    return babbling.filter(talk => {
        return talk.split(talking).join('') === ''
    }).length;
}