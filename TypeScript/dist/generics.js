"use strict";
// const names: Array<string> = [];
Object.defineProperty(exports, "__esModule", { value: true });
// names[0]?.split(' ');
// const promise = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve('Promise resolved')
//     }, 2000)
// })
// function identity(arg: number):number{
//     return arg;
// }
function identify(arg) {
    return arg;
}
const output = identify('Hello');
console.log(output);
const output2 = identify(123);
console.log(output2);
function firstElm(arr) {
    return arr[0];
}
const first = firstElm([1, 2, 3]);
console.log(first);
const second = firstElm(['a', 'b', 'c']);
console.log(second);
function countAndDescribe(element) {
    return `The length of the element is ${element.length}`;
}
const result = countAndDescribe('Hello');
console.log(result);
//# sourceMappingURL=generics.js.map