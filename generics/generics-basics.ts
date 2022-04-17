// Generics
// const names: string[] = []; // we can declare it in both ways
const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('This is done!');
   }, 2000);
});

promise.then(data => {
   console.log(data.split(' '));
});