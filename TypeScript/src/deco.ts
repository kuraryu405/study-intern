function Logger(logString: string){
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);
    }

}

@Logger('logを出力します')
class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
        console.log('Personをインスタンス化しました');
    }
}

const person = new Person('John', 30);
console.log(person);