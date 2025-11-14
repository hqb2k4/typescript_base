class StaticExample {
    static staticProperty: string = "I am a static property";

    static staticMethod(): string {
        return "I am a static method";
    }
}

console.log(StaticExample.staticProperty); // Output: I am a static property