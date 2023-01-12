// abstract class Shape {
//   abstract draw(): void;
// }

// class Rectangle extends Shape {
//   draw() {
//     console.log("Drawing a rectangle");
//   }
// }

// class Circle extends Shape {
//   draw() {
//     console.log("Drawing a circle");
//   }
// }

interface Dimensions {
  length: number;
  height: number;
}

abstract class Door {
  abstract dimensions(): Dimensions;
  draw(): void {}
}

class Glass extends Door {
  constructor() {
    super();
  }
  public dimensions(): Dimensions {
    const dim: Dimensions = {
      length: 12,
      height: 28,
    };
    return dim;
  }
}

const c = new Glass();
c.dimensions();
c.draw();
