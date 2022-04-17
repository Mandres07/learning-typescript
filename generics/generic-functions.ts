// defining any type we receive on each param
// force the param to be an object
function merge<T extends object, U extends object>(objA: T, objB: U) {
   return Object.assign(objA, objB);
   //  return { ...objA, ...objB };
}

const mergedObj = merge({ name: 'Mario', hobbies: ['Sing', 'Soccer'] }, { age: 29 });
const mergedObj2 = merge({ name: 'Mario', lastName: 'Morales' }, { age: 29 });
console.log(mergedObj.hobbies.join(', '));
console.log(mergedObj2.lastName);

interface Lengthy {
   length: number;
}

// Generic function, receives anything with a length property
// return a tuple with any type we receive and a string
function countAndDecribe<T extends Lengthy>(element: T): [T, string] {
   let descriptionText = 'Got no value.';
   if (element.length === 1) {
      descriptionText = 'Got 1 element.';
   } else if (element.length > 0) {
      descriptionText = 'Got ' + element.length + ' elements.';
   }
   return [element, descriptionText];
}

console.log(countAndDecribe('Hi there!'));
console.log(countAndDecribe([30, 45, 1, 1000]));
console.log(countAndDecribe(['Sports']));
console.log(countAndDecribe(''));

// Generic that says that the second param should be a key exising in first object param
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
   return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'Mario', age: 30 }, 'age'));