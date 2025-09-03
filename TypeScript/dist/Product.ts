// class Product {
//     constructor(readonly id: number, public name: string, private _cost: number){
//     }
// }

// // 抽象クラス「図形」
// abstract class Shape {
//     constructor(public color: string) {}
  
//     // 抽象メソッド。中身（{}）がない。
//     // 子クラスはこれを必ず実装しなければならない。
//     abstract getArea(): number;
//   }
  
//   // const shape = new Shape("red"); // エラー！抽象クラスはインスタンス化できない。
  
//   // Shapeを継承する子クラス「円」
//   class Circle extends Shape {
//     constructor(public radius: number, color: string) {
//       super(color); // 親のコンストラクタを呼ぶ
//     }
  
//     // 親の抽象メソッドを実装する義務がある
//     getArea(): number {
//       return this.radius * this.radius * Math.PI;
//     }
//   }
  
//   // Shapeを継承する子クラス「長方形」
//   class Rectangle extends Shape {
//     constructor(public width: number, public height: number, color: string) {
//       super(color);
//     }
  
//     // 親の抽象メソッドを実装する義務がある
//     getArea(): number {
//       return this.width * this.height;
//     }
//   }
  
//   const circle = new Circle(10, "blue");
//   console.log(circle.getArea());// 抽象クラス「図形」
//   abstract class Shape {
//     constructor(public color: string) {}
  
//     // 抽象メソッド。中身（{}）がない。
//     // 子クラスはこれを必ず実装しなければならない。
//     abstract getArea(): number;
//   }
  
//   // const shape = new Shape("red"); // エラー！抽象クラスはインスタンス化できない。

//   // Shapeを継承する子クラス「円」
//   class Circle extends Shape {
//     constructor(public radius: number, color: string) {
//       super(color); // 親のコンストラクタを呼ぶ
//     }
  
//     // 親の抽象メソッドを実装する義務がある
//     getArea(): number {
//       return this.radius * this.radius * Math.PI;
//     }
//   }
  
//   // Shapeを継承する子クラス「長方形」
//   class Rectangle extends Shape {
//     constructor(public width: number, public height: number, color: string) {
//       super(color);
//     }
  
//     // 親の抽象メソッドを実装する義務がある
//     getArea(): number {
//       return this.width * this.height;
//     }
//   }
  
//   const circle = new Circle(10, "blue");
//   console.log(circle.getArea());
console.log('hello world!')