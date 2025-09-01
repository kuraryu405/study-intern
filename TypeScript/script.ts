const button = document.querySelector("button");
const num1 = document.querySelector("num1")! as HTMLInputElement;
const num2 = document.querySelector("num2")! as HTMLInputElement;
button?.addEventListener("click", () => {
    console.log("ボタンがクリックされました");
});

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(sum(1, 2));