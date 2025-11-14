function tsoverloadDemo(x: number, y: number): number;
function tsoverloadDemo(x: string, y: string): string;
function tsoverloadDemo(x: any, y: any): any {
    return x + y;
}

console.log(tsoverloadDemo(5, 10));          // Output: 15
console.log(tsoverloadDemo("Hello, ", "World!")); // Output: Hello, World!
