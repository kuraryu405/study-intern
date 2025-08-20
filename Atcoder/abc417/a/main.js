let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let input_list = input.trim().split('\n');
let nums_list = input_list[0].split(' ')
//console.log(nums_list)
let N = nums_list[0];
let A = nums_list[1];
let B = nums_list[2]
let S = input_list[1];
// console.log(A);
// console.log(B);
// console.log(S);
// console.log(input_list)

let result = S.slice(A, S.length - B);

console.log(result);