// interface Person {
//    name: string;
//    age: number;
//    greet(phrase: string): void;
// }

// let user1: Person;
// user1 = {
//    name: 'Mario',
//    age: 29,
//    greet(phrase: string) {
//       console.log(phrase + ", I'm " + this.name);
//    }
// };
// user1.greet('Hi there');

type AddFn = (a: number, b: number) => number;
let add: AddFn;
add = (n1: number, n2: number) => {
   return n1 + n2;
}

interface AddFunc {
   (a: number, b: number): number;
}
let addFunc: AddFunc;
addFunc = (n1: number, n2: number) => {
   return n1 + n2;
}

interface Named {
   readonly name?: string;
   outputName?: string; //Optional property
}

// in interfaces we can extend from multimple interfaces unlike on classes on which we can only 
// extend from one class
interface Greetable extends Named {
   greet(phrase: string): void;
}

class Person implements Greetable {
   name?: string;
   constructor(private age: number, name?: string) {
      if (name) {
         this.name = name;
      }
   }
   greet(phrase: string): void {
      if (this.name) {
         console.log(phrase + ", I'm " + this.name + '. Age: ' + this.age);
      }
      else {
         console.log(phrase);
      }
   }

   hello() {
      console.log('JEJEJE');
   }
}

let user2: Greetable;
user2 = new Person(29, 'Mario');
user2.greet('Welcome');

const user3 = new Person(10);
user3.greet('Hey');