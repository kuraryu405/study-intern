const { default: kbd } = require("daisyui/components/kbd");

const name = '狐';
const masg2 = '私の名前は${name}です。';

//関数
function func1(str){
    return str;
}

const func2 = (str) =>{
    return str;
};


const myProfile = {
    name: 'Kurano',
    age: 19
};

//従来の書き方
const msg3 = '名前は${myProfile.name}です。年齢は${myProfile.age}です。'

//モダン？な書き方
const { name, age } = myProfile;
const msg4 = '名前は${name}です。年齢は${age}です。'

//配列
const myProfile1 = ['Kurano', 19];
const msg5 = `名前は${myProfile1[0]}です。年齢は${myProfile1[1]}です。`;


const [name, age] = myProfile1;

//この↑の変数は好きな名前に設定してその名前で受け取ることができる

//スプレッド構文

//配列の展開
const arr1 = [1, 2];

console.log(arr1);//[1, 2]
console.log(...arr1);// 1 2

const sumfunc = (num1, num2) => console.log(num1 + num2);
sumfunc(...arr1); // dumfunc(arr1[0], arr1[1]);

//まとめる

const att2 = [1,2,3,4,5];
const [num1, num2, ...arr3] = arr2;

console.log(num1); // 1
console.log(num2); // 2
console.log(arr3); // [3, 4, 5]





//map filter

//従来

const namearr = ['狐', '猫', '犬', '虎', '馬'];

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}

namearr.map((name) => {
    return name;
});

const numarr = [1,2,3,4,5];
const newnumarr = numarr.filter((num) => {
    return num % 2 === 1;
})



