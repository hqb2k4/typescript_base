let obj: object;

let obj1 = { name: "Hoang Quoc Bao" };

let obj2: {};
obj2 = { name: "Hoang Quoc Bao" };

let obj3: { name: string; age: number };
obj3 = { 
    name: "Hoang Quoc Bao", 
    age: 22
    // age: "anjdhakjda" // Error: Type 'string' is not assignable to type 'number'
};

let obj4:{name: string; age: number } = { name: "Hoang Quoc Bao", age: 22 };

console.log("obj1", obj1);
console.log("obj2", obj2);
console.log("obj3", obj3);
console.log("obj4", obj4);