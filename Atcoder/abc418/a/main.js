let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let input_list = input.trim().split('\n')

if (input_list[1].slice(input_list[0]-3, input_list[0]) == 'tea'){
    console.log('Yes')
}else{
    console.log('No')
};

