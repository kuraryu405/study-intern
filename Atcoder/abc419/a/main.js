let S = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

if(S === 'red'){
    console.log('SSS');
}else if(S === 'blue'){
    console.log('FFF');
}else if(S === 'green'){
    console.log('MMM');
}else{
    console.log('Unknown');
}