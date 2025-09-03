// class smartphone{
//     private _serialNumber: string;
//     name: string;
//     price: number;

//     constructor(name: string, price: number, serialNumber: string){
//         this.name = name;
//         this.price = price;
//         this._serialNumber = serialNumber;
//     }

//     getSerialNumber(): string {
//         return this._serialNumber;
//     }
    
//     setSerialNumber(serialNumber: string): void {
//         this._serialNumber = serialNumber;
//     }
// }

// const smartphone1 = new smartphone('iPhone', 100000, '1234567890');
// console.log(smartphone1.getSerialNumber());
// smartphone1.setSerialNumber('0987654321');
// console.log(smartphone1.getSerialNumber());


// //長い書き方

// // class Car{
// //     public name: string;
// //     public speed: number;

// //     constructor(name: string, speed: number){
// //         this.name = name;
// //         this.speed = speed;
// //     }
// // }



// //短い書き方

// class Car{
//     constructor(public name: string, public speed: number){}
// }
// const car1 = new Car('Toyota', 100);
// console.log(car1.name);
// console.log(car1.speed);
interface Person{
    name: string;
    age: number;

    greet(phrase: string): void;
}


let User1: Person;

User1 = {
    name: 'kuraryu',
    age: 19,
    greet(phrase: string){
        console.log(phrase + ' ' + this.name);
    }

}


User1.greet('hello');

 