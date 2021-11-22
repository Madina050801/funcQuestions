// function obj(num1, num2) {
//     if (num1, num2) {
//         console.log(num1 + num2);
//     }
//     return function (num3) {
//         console.log(num1 + num3);
//     }
// }
// obj(1, 2);
// obj(1)(4);



const obj1 = {
    a: 1,
    b: 2,
    getA() {
        console.log(this.a);
        return this
    },
    getB() {
        console.log(this.b);
        // return this
    },
}
obj1.getA().getB();
