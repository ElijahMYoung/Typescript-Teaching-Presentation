var RectangularPrism = /** @class */ (function () {
    function RectangularPrism() {
    }
    RectangularPrism.prototype.draw = function () {
        console.log("Drawing a rectangular prism");
    };
    return RectangularPrism;
}());
var Cylinder = /** @class */ (function () {
    function Cylinder() {
    }
    Cylinder.prototype.draw = function () {
        console.log("Drawing a cylinder");
    };
    return Cylinder;
}());
function drawPrisms(prisms) {
    for (var _i = 0, prisms_1 = prisms; _i < prisms_1.length; _i++) {
        var prism = prisms_1[_i];
        prism.draw();
    }
}
var prisms = [new RectangularPrism(), new Cylinder()];
drawPrisms(prisms);
