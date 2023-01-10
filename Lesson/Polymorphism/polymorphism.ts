interface Shape {
  draw(): void;
}

class Rectangle implements Shape {
  draw() {
    console.log("Drawing a rectangle");
  }
}

class Circle implements Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

function drawShapes(shapes: Shape[]) {
  for (const shape of shapes) {
    shape.draw();
  }
}

const shapes = [new Rectangle(), new Circle()];
drawShapes(shapes);
