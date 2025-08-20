let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let S = input.trim().split('\n')[1];
let NLR = input.trim().split('\n')[0].split(' ');
// console.log(NLR);
// console.log(input);
let N = NLR[0];
let L = NLR[1];
let R = NLR[2];
// console.log(S);
// console.log(N);
// console.log(L);
// console.log(R);
let S_slice = S.slice(L-1,R);
let cnt = 0;
for(i of S_slice){
    if(i ==='o'){
        cnt++;
    }
}
if(cnt === S.slice(L-1,R).length){
    console.log('Yes');
}else{
    console.log('No');
}