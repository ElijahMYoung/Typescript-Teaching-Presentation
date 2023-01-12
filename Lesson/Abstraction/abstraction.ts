abstract class Vehicle {
  abstract start(): void;
  stop(): void {
    console.log("Stopping...");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Starting car...");
  }
}

let car = new Car();
car.start(); // Output: "Starting car..."
car.stop(); // Output: "Stopping..."
