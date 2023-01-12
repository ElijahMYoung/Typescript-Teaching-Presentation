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
var Door = /** @class */ (function () {
    function Door() {
    }
    Door.prototype.draw = function () { };
    return Door;
}());
var Glass = /** @class */ (function (_super) {
    __extends(Glass, _super);
    function Glass() {
        return _super.call(this) || this;
    }
    Glass.prototype.dimensions = function () {
        var dim = {
            length: 12,
            height: 28
        };
        return dim;
    };
    return Glass;
}(Door));
var c = new Glass();
c.dimensions();
c.draw();
console.log(Glass);
