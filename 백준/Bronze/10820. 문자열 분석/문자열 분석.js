const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n").filter(Boolean);

input.forEach((str) => {
    let lower = 0;
    let upper = 0;
    let digit = 0;
    let space = 0;
    
    for (let char of str){
        if((/[a-z]/).test(char)) lower++;
        else if ((/[A-Z]/).test(char)) upper++;
        else if ((/[0-9]/).test(char)) digit++;
        else if (char === ' ') space++;
    }
    
    console.log(`${lower} ${upper} ${digit} ${space}`);
})