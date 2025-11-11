// Ts is Static typeing type
const sum3 = (x: number, y: number) => x + y;

// error
// console.log("Check sum3 = " + sum3("Tuoi cua Bao: ", 22));

// no error
console.log("Check sum3 = " + sum3(1, 2));