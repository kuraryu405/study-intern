const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
    return `${accu}<${curr}>`;
}

function reduce(arry, callback, defaultValue) {
    let accu = defaultValue;
    for(let i = 0; i < arry.length; i++) {
        let curr = arry[i];
        accu = callback(accu, curr);
    }
    return accu;
    
}

const result = strArry.reduce(tag, "");
console.log(result);