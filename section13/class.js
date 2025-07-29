class Item {
    name = '';
    stock = 0;

    buy(cnt){
        this.stock -= cnt;
    }

}
let peach = new Item();
peach.name = 'ピーチ';
peach.stock = 10;
console.log(peach.name + 'は' + peach.stock + '個あります');

let banana = new Item();
banana.name = 'バナナ';
banana.stock = 10;
console.log(banana.name + 'は' + banana.stock + '個あります');

