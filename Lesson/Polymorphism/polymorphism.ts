interface Prism {
  draw(): void;
}

class RectangularPrism implements Prism {
  draw() {
    console.log("Drawing a rectangular prism");
  }
}

class Cylinder implements Prism {
  draw() {
    console.log("Drawing a cylinder");
  }
}

function drawPrisms(prisms: Prism[]) {
  for (const prism of prisms) {
    prism.draw();
  }
}

const prisms = [new RectangularPrism(), new Cylinder()];
drawPrisms(prisms);
