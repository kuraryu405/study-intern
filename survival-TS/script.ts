// 型エイリアス
type StringOrNumber = string | number;

// こんなふうに既存の型を自分が使いやすいように変更できる
type objWithName = {name: string, age: number};

// 関数の型エイリアス
type addFn = (a: number, b: number) => number;

// こんなふうに関数の型エイリアスを使うことができる
const add: addFn = (a, b) => a + b;


let numbers : number[];
numbers = [1, 2, 3, 4, 5];

let strings : Array<string>;
strings = ['a', 'b', 'c'];

let arr : readonly string[];
arr = ['a', 'b', 'c'];

const numbers = [1, 2, 3];
 
for (const num of numbers) {
  console.log(num); // 1, 2, 3と出力される
}