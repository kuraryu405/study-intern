const arry = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arry.length; i++) {
//     console.log(i);
// }

for (let i in arry) {
    console.log(i);
}

for (let i of arry) {
    console.log(i);
}