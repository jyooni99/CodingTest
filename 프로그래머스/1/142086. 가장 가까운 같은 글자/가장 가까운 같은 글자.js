function solution(s) {
	let strArr = s.split('');
	let answer = [];
	
	strArr.forEach((char, idx) => {
		let lastIdx = strArr.lastIndexOf(char, idx - 1);
		answer.push(idx === 0 || lastIdx === -1 ? -1 : idx - lastIdx); 
	})
    
    return answer;
	
}