function alwaysError() {
    throw new Error("Something went wrong!");
}
alwaysError(); // chương trình dừng ở đây
console.log("This line will never run");
