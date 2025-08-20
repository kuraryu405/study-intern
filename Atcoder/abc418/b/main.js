let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let word = input.match(/t.*t/);
let cnt = 0


function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let str = word[0];  
for (let i = 0; i < str.length; i++) {
    if (str[i] === 't') {
        cnt++;
    }
}
if (cnt == 0){
    console.log(0);
}else{
    let numerator = cnt - 2;
    let denominator = str.length - 2;
    
    // 約分
    let divisor = gcd(Math.abs(numerator), Math.abs(denominator));
    let simplifiedNum = numerator / divisor;
    let simplifiedDen = denominator / divisor;
    
    console.log(simplifiedNum + '/' + simplifiedDen);
}
