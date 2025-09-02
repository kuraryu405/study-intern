// リテラル型の説明

// リテラル型とは、特定の値そのものだけを許容する型です。
// 例えば、"yes" という文字列だけを許容する型や、1 という数値だけを許容する型などがあります。

// 例1: 文字列リテラル型
let answer: "yes" | "no";
answer = "yes"; // OK
answer = "no";  // OK
// answer = "maybe"; // エラー: "yes" または "no" 以外は代入できません

// 例2: 数値リテラル型
let one: 1;
one = 1; // OK
// one = 2; // エラー: 1 以外は代入できません

// 例3: 真偽値リテラル型
let flag: true;
flag = true; // OK
// flag = false; // エラー: true 以外は代入できません

// リテラル型は、ユニオン型と組み合わせて使うことで、特定の値のみを受け付ける関数や変数を定義できます。

function printDirection(direction: "up" | "down" | "left" | "right") {
    console.log(`方向: ${direction}`);
}

printDirection("up");    // OK
printDirection("right"); // OK
// printDirection("forward"); // エラー: 指定したリテラル型以外は受け付けません
