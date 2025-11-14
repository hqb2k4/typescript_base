// rest parameters copy all remaining parameters into an array
const sumrest = (...numbers: number[]): number => {
    // reduce (accmulator|initialValue,currentValue,initialValue,array)
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumrest(1, 2, 3, 4)); 