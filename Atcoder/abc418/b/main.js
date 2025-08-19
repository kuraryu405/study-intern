//b
let input = require('fs').readFileSync('/dev/stdin', 'utf8');
word = input.match('t.*t')
let cnt = 0
for (let i = 0; i <= word.length; i++){
    if (word[i] == 't'){
        cnt++
    }
}
if (cnt == 0){
    console.log(0)
}else{
    console.log(cnt - 2 / word.length -2);
}