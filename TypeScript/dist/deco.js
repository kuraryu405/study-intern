"use strict";
// function Logger(logString: string){
//     return function(constructor: Function){
//         console.log(logString);
//         console.log(constructor);
//     }
Object.defineProperty(exports, "__esModule", { value: true });
// }
// function WithTemplate(template: string, hookId: string){
//     return function(constructor: Function){
//         const hookEl = document.getElementById(hookId);
//         const p = new constructor();
//         if (hookEl){
//             hookEl.innerHTML = template;
//         }
//     }
// }
// @Logger('logを出力します')
// class Person{
//     name: string;
//     age: number;
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//         console.log('Personをインスタンス化しました');
//     }
// }
// const person = new Person('John', 30);
// console.log(person);
class Product {
    title;
    _price;
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('0以下やんけ');
        }
    }
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getPriceWithTax(tax) {
        return this.price * (1 + tax);
    }
}
//# sourceMappingURL=deco.js.map