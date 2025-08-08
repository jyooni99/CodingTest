const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const words = input.slice(1);

const uniqueWords = Array.from(new Set(words));

uniqueWords.sort((next, prev) => {
    if (next.length === prev.length ){
        return next.localeCompare(prev);
    }

    return next.length - prev.length;
})

console.log(uniqueWords.join('\n'));              