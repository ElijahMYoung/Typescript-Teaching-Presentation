"use strict";
exports.__esModule = true;
var encapsulation_1 = require("./Encapsulation/encapsulation");
var obj = new encapsulation_1["default"]();
obj.setValue("Hello World!");
console.log(obj.getValue());
// Output: "Hello World!"
obj.secretMethod();
// error : Property 'secretMethod' is private and only accessible within class 'EncapsulationExample'.
