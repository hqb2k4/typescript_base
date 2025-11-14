class TSAnimal {
    sound() {
        console.log("some sound");
    }
}

class Cat extends TSAnimal {
    sound() {
        console.log("meow");
    }
}

const myCat = new Cat();
myCat.sound(); // Output: meow
