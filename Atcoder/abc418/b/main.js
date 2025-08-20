let input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
let maxRate = 0;

for (let i = 0; i < input.length; i++) {
    for (let j = i + 2; j < input.length; j++) {
        let sub = input.slice(i, j + 1);
        if (/^t.*t$/.test(sub)) {
            let tCount = sub.split('').filter(c => c === 't').length;
            let rate = (tCount - 2) / (sub.length - 2);
            if (rate > maxRate) maxRate = rate;
        }
    }
}
console.log(maxRate.toFixed(17));
