let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let input_list = input.trim().split('\n');
// console.log(input_list);
let NM_list = input_list[0].split(' ');
let M = NM_list[1];
let A_list = input_list[1].split(' ');
// console.log(NM_list)
// console.log(A_list)
let B_list = input_list[2].split(' ');
let result = []
for (let i = 0; i < M; i++){
    for(j of B_list){
        for(k of A_list){
            if(k == j){
                A_list = A_list.filter(x => x != k);
                break;
            }
        }
    }
}
console.log(A_list)