class TsPerson {
    // properties|attributes
    name: string;
    age: number;

    // constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }  
    
    // method
    getInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new TsPerson("Bao", 21);
console.log(person1);
console.log(`${person1.getInfo()}`);