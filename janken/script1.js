const resultNum = Math.floor(Math.random() * 3) + 1; // 1〜3
let result;
if (resultNum === 1) {
  result = 'グー';
} else if (resultNum === 2) {
  result = 'パー';
} else {
  result = 'チョキ';
}

function janken(result){
    let input = document.querySelector('#input');
    if (input === 'グー'){
        if (result == 'グー'){
            document.querySelector('#computer').textContent('相手が出したのはグー！')
            document.querySelector('#result').textContent('あいこ！')
        }else if (result == 'チョキ'){
            document.querySelector('#computer').textContent('相手が出したのはチョキ！')
            document.querySelector('#result').textContent('あなたの勝ち！')
        }else if(result == 'パー'){
            document.querySelector('#computer').textContent('相手が出したのはパー！')
            document.querySelector('#result').textContent('負け、、、')
        }
    }
}


