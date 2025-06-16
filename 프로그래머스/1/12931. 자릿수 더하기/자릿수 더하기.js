function solution(n)
{
    let answer = 0;
    
    n.toString().split('').reduce((acc, cur) => {
        answer += Number(cur);
    }, 0)

    return answer;
}