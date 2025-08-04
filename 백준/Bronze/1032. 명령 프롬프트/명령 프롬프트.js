const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const files = input.slice(1, n + 1);

let pattern = '';
const length = files[0].length;

for (let i = 0; i < length; i++) {
  const char = files[0][i];
  const allSame = files.every(file => file[i] === char);
  pattern += allSame ? char : '?';
}

console.log(pattern);