// // const button = document.querySelector("button");
// // const num1 = document.querySelector("num1")! as HTMLInputElement;
// // const num2 = document.querySelector("num2")! as HTMLInputElement;
// // button?.addEventListener("click", () => {
// //     console.log("ボタンがクリックされました");
// // });

// // function sum(num1: number, num2: number): number {
// //     return num1 + num2;
// // }

// // console.log(sum(1, 2));

// console.log("Hello World!!!!!!!!!!!!!!!!");


// function conbine(num1: number|string, num2: number|string): number|string {
//     if (typeof num1 === "number" && typeof num2 === "number") {
//         return num1 + num2;
//     } else {
//         return num1.toString() + num2.toString();
//     }
// }
// console.log(conbine(1, 2));
// console.log(conbine("1", "2"));


const array: (number|string)[] = [1, 2, "3", 4, 5];

for (const item of array) {
    console.log(item);
}