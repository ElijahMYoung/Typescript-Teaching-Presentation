"use strict";
exports.__esModule = true;
var EncapsulationExample = /** @class */ (function () {
    function EncapsulationExample() {
    }
    EncapsulationExample.prototype.secretMethod = function () {
        console.log("This is a private method!");
    };
    EncapsulationExample.prototype.setValue = function (newValue) {
        this.value = newValue;
    };
    EncapsulationExample.prototype.getValue = function () {
        return this.value;
    };
    return EncapsulationExample;
}());
exports["default"] = EncapsulationExample;
var obj = new EncapsulationExample();
obj.setValue("Hello World!");
console.log(obj.getValue());
// Output: "Hello World!"
// obj.secretMethod();
