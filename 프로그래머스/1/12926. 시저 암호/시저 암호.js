function solution(s, n) {
    return s.split('').map((char) => {
        if(char === ' ') return char;
        
        let isUpperCase = (char >= 'A' && char <= 'Z');
        let isLowerCase = (char >= 'a' && char <= 'z');
        
        let charCode = char.charCodeAt() + n;
        
        if(isUpperCase && charCode > 90){
            charCode -= 26
        }else if(isLowerCase && charCode > 122){
            charCode -= 26
        }
        
        return String.fromCharCode(charCode);
    }).join('');
}