var getsetExample = /** @class */ (function () {
    function getsetExample(name) {
        this._name = name;
    }
    Object.defineProperty(getsetExample.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return getsetExample;
}());
var example = new getsetExample("Bao123");
console.log(example.name);
example.name = "Hoang Bao";
console.log(example.name);
