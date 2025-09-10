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

const numbers1 = [1, 2, 3];
 
for (const num of numbers1) {
  console.log(num); // 1, 2, 3と出力される
}


// オブジェクトリテラル
const John = { name: 'John', age: 30 };
// プロパティ：値,・・・・


// マップオブジェクト
const map = new Map();
map.set("name", "John");
map.set("age", "20");

console.log(map.get("name"));

// Map {
//     "name" => "John",
//     "age"  => "20"
//   }
  

// switch文
const color: string = "blue";

switch (color) {
  case "red":
    console.log("Color is red.");
    break;
  case "blue":
    console.log("Color is blue.");
    break;
  default:
    console.log("Color is neither red nor blue.");
}