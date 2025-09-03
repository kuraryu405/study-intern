// const names: Array<string> = [];

// names[0]?.split(' ');

// const promise = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve('Promise resolved')
//     }, 2000)
// })

// function identity(arg: number):number{
//     return arg;

// }

function identify<Hoge>(arg: Hoge):Hoge{
    return arg;
}

const output = identify<string>('Hello');
console.log(output);

const output2 = identify<number>(123);
console.log(output2);

function firstElm<Huga>(arr: Huga[]): Huga | undefined {
    return arr[0] as Huga;
}

const first = firstElm<number>([1, 2, 3]);
console.log(first);

const second = firstElm<string>(['a', 'b', 'c']);
console.log(second);




interface LengthWise {
    length: number;
}

function countAndDescribe<T extends LengthWise>(element: T): string {
    return `The length of the element is ${element.length}`;
}

const result = countAndDescribe('Hello');
console.log(result);
