var button = document.querySelector("button");
var num1 = document.querySelector("num1");
var num2 = document.querySelector("num2");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log("ボタンがクリックされました");
});
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(1, 2));
