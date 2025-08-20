let nums = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
// console.log(nums);
let box = [];
for(let i of nums){
    if (i[0] == 1){
        box.push(i[2])
    }else if(i[0] == 2){
        let minVal = Math.min(...box);
        console.log(minVal);
        let idx = box.indexOf(minVal.toString());
        if (idx !== -1) {
            box.splice(idx, 1);
        }
    };
}