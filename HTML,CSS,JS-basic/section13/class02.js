class Item {
    name;
    stock;

    constructor(name, stock){
        this.name = name;
        this.stock = stock;
    }

    buy(cnt){
        this.stock -= cnt;
    }
}
class food extends Item {
    constructor(name, stock, price, limitDate){
        super(name, stock);
        this.price = price;
        this.limitDate = limitDate;
    }
}

let peach = new Item('ピーチ', 10);
let banana = new Item('バナナ', 10);
let apple = new food('リンゴ', 10, 100);