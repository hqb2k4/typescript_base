var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this._name = theName;
    }
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Animal.prototype.move = function () {
        console.log("moving...");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(_name, _action) {
        var _this = _super.call(this, _name) || this;
        _this._action = _action;
        return _this;
    }
    Object.defineProperty(Dog.prototype, "action", {
        get: function () {
            return this._action;
        },
        set: function (newAction) {
            this._action = newAction;
        },
        enumerable: false,
        configurable: true
    });
    Dog.prototype.bark = function () {
        console.log("woof");
    };
    // overwrite
    Dog.prototype.move = function () {
        console.log("Dog is moving...");
    };
    Dog.prototype.moveAnimal = function () {
        _super.prototype.move.call(this);
    };
    return Dog;
}(Animal));
var dog = new Dog("Buddy", "Running");
dog.bark();
dog.move();
dog.moveAnimal();
console.log("".concat(dog.name, " is ").concat(dog.action, " "));
