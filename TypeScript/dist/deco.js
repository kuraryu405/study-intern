"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
@Logger('logを出力します')
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('Personをインスタンス化しました');
    }
}
const person = new Person('John', 30);
console.log(person);
//# sourceMappingURL=deco.js.map