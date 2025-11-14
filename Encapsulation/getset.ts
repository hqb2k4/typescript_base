// Encapsulation
class getsetExample {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }   

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }
}

const example = new getsetExample("Bao123");
console.log(example.name);
example.name = "Hoang Bao";
console.log(example.name);