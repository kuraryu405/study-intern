

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
        document.querySelector('#result-img').innerHTML = '<img src="img/gu.png" alt="グー">';
    } else if (computerHand === 'チョキ') {
        document.querySelector('#result').textContent = 'あなたの勝ち！';
        document.querySelector('#result-img').innerHTML = '<img src="img/tyoki.png" alt="チョキ">';
    } else {
        document.querySelector('#result').textContent = '負け、、、';
        document.querySelector('#result-img').innerHTML = '<img src="img/pa.png" alt="パー">';
    }
});

pa.addEventListener('click', () => {
    let computerHand = result;
    document.querySelector('#computer').textContent = `相手が出したのは${computerHand}！`;
    if (computerHand === 'パー') {
        document.querySelector('#result').textContent = 'あいこ！';
        document.querySelector('#result-img').innerHTML = '<img src="img/pa.png" alt="パー">';
    } else if (computerHand === 'グー') {
        document.querySelector('#result').textContent = 'あなたの勝ち！';
        document.querySelector('#result-img').innerHTML = '<img src="img/gu.png" alt="グー">';
    } else {
        document.querySelector('#result').textContent = '負け、、、';
        document.querySelector('#result-img').innerHTML = '<img src="img/tyoki.png" alt="チョキ">';
    }
});

tyoki.addEventListener('click', () => {
    let computerHand = result;
    document.querySelector('#computer').textContent = `相手が出したのは${computerHand}！`;
    if (computerHand === 'チョキ') {
        document.querySelector('#result').textContent = 'あいこ！';
        document.querySelector('#result-img').innerHTML = '<img src="img/tyoki.png" alt="チョキ">';
    } else if (computerHand === 'パー') {
        document.querySelector('#result').textContent = 'あなたの勝ち！';
        document.querySelector('#result-img').innerHTML = '<img src="img/pa.png" alt="パー">';
    } else {
        document.querySelector('#result').textContent = '負け、、、';
        document.querySelector('#result-img').innerHTML = '<img src="img/gu.png" alt="グー">';
    }
});


