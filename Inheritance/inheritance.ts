class Animal {
    private _name: string;

    constructor(theName: string) {
        this._name = theName;
    }

    get name(): string {
        return this._name;
    }

    move() {
        console.log("moving...");
    }
}

class Dog extends Animal {
    private _action: string;

    constructor(_name: string, _action: string) {
        super(_name);
        this._action = _action;
    }

    get action(): string {
        return this._action;
    }

    set action(newAction: string) {
        this._action = newAction;
    }

    bark() {
        console.log("woof");
    }

    // overwrite
    move() {
        console.log("Dog is moving...");
    }

    moveAnimal() {
        super.move();
    }
}
const dog = new Dog("Buddy", "Running");
dog.bark();
dog.move();
dog.moveAnimal();
console.log(`${dog.name} is ${dog.action} `);