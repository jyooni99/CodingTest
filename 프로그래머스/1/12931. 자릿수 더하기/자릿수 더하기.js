function solution(n)
{
    return n.toString().split('').reduce((acc, v) => acc += parseInt(v), 0);
}