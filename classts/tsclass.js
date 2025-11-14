var TsPerson = /** @class */ (function () {
    // constructor
    function TsPerson(name, age) {
        this.name = name;
        this.age = age;
    }
    // method
    TsPerson.prototype.getInfo = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return TsPerson;
}());
var person1 = new TsPerson("Bao", 21);
console.log(person1);
console.log("".concat(person1.getInfo()));
