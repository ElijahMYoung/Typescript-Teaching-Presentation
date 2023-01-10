abstract class Shape {
  abstract draw(): void;
}

class Rectangle extends Shape {
  draw() {
    console.log("Drawing a rectangle");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}
