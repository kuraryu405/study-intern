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

let peach = new Item('ピーチ', 10);
let banana = new Item('バナナ', 10);