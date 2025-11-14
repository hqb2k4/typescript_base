abstract class Animal {
    abstract sound(): void;
}

class Dog extends Animal {
    sound() {
        console.log("woof");
    }
}
const myDog = new Dog();
myDog.sound(); // Output: woof