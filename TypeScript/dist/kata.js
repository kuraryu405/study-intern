"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 交差型は単に型を結合するだけ
const e1 = {
    name: 'kuraryu',
    privileges: ['create-server'],
    startDate: new Date()
};
console.log(e1.name);
// 型ガードの例
function printEmployeeInformation(emp) {
    console.log('名前: ' + emp.name);
    if ('privileges' in emp) {
        console.log('特権: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('開始日: ' + emp.startDate);
    }
}
printEmployeeInformation(e1);
const e2 = {
    name: 'taro',
    startDate: new Date('2023-01-01')
};
printEmployeeInformation(e2);
const bird = { flyingspeed: 20 };
const horse = { runningspeed: 50 };
moveAnimal(bird);
moveAnimal(horse);
function moveAnimal(animal) {
    if ('flyingspeed' in animal) {
        console.log('移動速度: ' + animal.flyingspeed + '（鳥）');
    }
    else if ('runningspeed' in animal) {
        console.log('移動速度: ' + animal.runningspeed + '（馬）');
    }
}
//# sourceMappingURL=kata.js.map