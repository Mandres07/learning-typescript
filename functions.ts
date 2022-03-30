function add(n1: number, n2: number): number {
   return n1 + n2;
}

function printResult(num: number): void {
   console.log('Result: ' + num);
}

function printResult2(num: number) {
   console.log('Result: ' + num);
   return;
}

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
   const result = n1 + n2;
   cb(result);
}

printResult(add(5, 12));

// set that combineValues can be any function that takes 2 numbers params and returns a number
let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
   console.log(result);
   return result;
});
