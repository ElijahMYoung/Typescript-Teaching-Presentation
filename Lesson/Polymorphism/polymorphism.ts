interface Animal {
  makeSound(): void;
}

class Dog implements Animal {
  makeSound() {
    console.log("Woof!");
  }
}

class Cat implements Animal {
  makeSound() {
    console.log("Meow!");
  }
}

let animal: Animal;
animal = new Dog();
animal.makeSound(); // Output: "Woof!"

animal = new Cat();
animal.makeSound(); // Output: "Meow!"
