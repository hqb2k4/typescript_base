class Animal {
  move() {
    console.log("moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}
const dog = new Dog();
dog.bark();
dog.move();