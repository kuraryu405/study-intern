const button = document.querySelectorAll('.btn');

let result = ''; 

button.forEach(btn => {
    btn.addEventListener('click', () => {
        const resultNum = Math.floor(Math.random() * 3) + 1; // 1〜3
        console.log(resultNum);
        if (resultNum === 1) {
            result = 'グー';
        } else if (resultNum === 2) {
            result = 'パー';
        } else {
            result = 'チョキ';
        }
    });
});



const gu = document.querySelector('#gu');
const pa = document.querySelector('#pa');
const tyoki = document.querySelector('#tyoki');

gu.addEventListener('click', () => {
    let computerHand = result;//紛らわしいので名前を変える。書き換える気力はない
    document.querySelector('#computer').textContent = `相手が出したのは${computerHand}！`;
    if (computerHand === 'グー') {
        document.querySelector('#result').textContent = 'あいこ！';
    } else if (computerHand === 'チョキ') {
        document.querySelector('#result').textContent = 'あなたの勝ち！';
    } else {
        document.querySelector('#result').textContent = '負け、、、';
    }
});

pa.addEventListener('click', () => {
    let computerHand = result;
    document.querySelector('#computer').textContent = `相手が出したのは${computerHand}！`;
    if (computerHand === 'パー') {
        document.querySelector('#result').textContent = 'あいこ！';
    } else if (computerHand === 'グー') {
        document.querySelector('#result').textContent = 'あなたの勝ち！';
    } else {
        document.querySelector('#result').textContent = '負け、、、';
    }
});

tyoki.addEventListener('click', () => {
    let computerHand = result;
    document.querySelector('#computer').textContent = `相手が出したのは${computerHand}！`;
    if (computerHand === 'チョキ') {
        document.querySelector('#result').textContent = 'あいこ！';
    } else if (computerHand === 'パー') {
        document.querySelector('#result').textContent = 'あなたの勝ち！';
    } else {
        document.querySelector('#result').textContent = '負け、、、';
    }
});
