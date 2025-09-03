type Admin = {
    name: string;
    privileges: string[];
}

type Enployee = {
    name: string;
    startDate: Date;
}

type ElevateEnployee = Admin & Enployee;
// 交差型は単に型を結合するだけ
const e1: ElevateEnployee = {
    name: 'kuraryu',
    privileges: ['create-server'],
    startDate: new Date()

} 

console.log(e1.name)

type UnkwownEnp = Admin | Enployee;

// 型ガードの例
function printEmployeeInformation(emp: UnkwownEnp) {
    console.log('名前: ' + emp.name);
    if ('privileges' in emp) {
        console.log('特権: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('開始日: ' + emp.startDate);
    }
}

printEmployeeInformation(e1);

const e2: UnkwownEnp = {
    name: 'taro',
    startDate: new Date('2023-01-01')
};

printEmployeeInformation(e2);


interface Bird {
    flyingspeed: number;
}

interface Horse{
    runningspeed: number; 
}

type Animal = Bird|Horse;
const bird: Bird = { flyingspeed: 20 };
const horse: Horse = { runningspeed: 50 };

moveAnimal(bird);
moveAnimal(horse);


function moveAnimal(animal: Animal){
    if ('flyingspeed' in animal) {
        console.log('移動速度: ' + animal.flyingspeed + '（鳥）');
    } else if ('runningspeed' in animal) {
        console.log('移動速度: ' + animal.runningspeed + '（馬）');
    }
}