//#region Core Types

// Core Types
// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//    const result = n1 + n2;
//    if (showResult) {
//       console.log(phrase + result);
//    } else {
//       return result;
//    }
// }

// const number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = 'Result is: ';

// add(number1, number2, printResult, resultPhrase);

//#endregion

//#region Object Type

// Object type
// are different from javascript objects. The object structure can be declared first
// const person: {
//    name: string;
//    age: number;
// } = {
//    name: 'Mario',
//    age: 29
// };

// const person2 = {
//    name: 'Mario',
//    age: 29
// };
// console.log(person2.name);

//#endregion

//#region Arrays

// Array type
// const person = {
//    name: 'Mario',
//    age: 29,
//    hobbies: ['Sports', 'Cooking']
// };
// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];
// console.log(person.name);

// for (const hobby of person.hobbies) {
//    console.log(hobby.toUpperCase());
// }

//#endregion

//#region Tuples

// Tuples
// const person: {
//    name: string;
//    age: number;
//    hobbies: string[];
//    role: [number, string]; // Tuple type
// } = {
//    name: 'Mario',
//    age: 29,
//    hobbies: ['Sports', 'Cooking'],
//    role: [2, 'author']
// };

// // person.role = []; ERROR
// person.role.push('admin'); // push is an exception
// // person.role[1] = 10;

// for (const role of person.role) {
//    console.log(role);
// }

//#endregion

//#region Enums

// Enums

// enum Role {
//    ADMIN = 1,
//    READ_ONLY = 'Admin',
//    AUTHOR = 4
// };

// const person = {
//    name: 'Mario',
//    age: 29,
//    hobbies: ['Sports', 'Cooking'],
//    role: Role.READ_ONLY
// };

// if (person.role === Role.READ_ONLY) {
//    console.log('Is admin user');
// }

//#endregion

//#region Any
// Try to avoid using Any

// let favoriteActivities: any[];
// favoriteActivities = ['hehe', false, { name: 'name', age: 30 }];

//#endregion
