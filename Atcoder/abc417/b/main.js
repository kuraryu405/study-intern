let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.trim().split('\n');
let A = lines[1].split(' ');
let B = lines[2].split(' ');

for (const b of B) {
  const idx = A.indexOf(b);
  if (idx !== -1) {
    A.splice(idx, 1);  
  }
}

console.log(A.join(' '));
