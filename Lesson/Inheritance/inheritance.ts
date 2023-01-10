class Cuboid {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Box extends Cuboid {
  constructor(width: number, height: number) {
    super(width, height);
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}
