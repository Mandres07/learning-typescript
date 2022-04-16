type Admin = {
   name: string;
   privileges: string[];
};

type Employee = {
   name: string;
   startDate: Date;
};

// this mix both types into one
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
   name: 'Mario',
   privileges: ['create-server'],
   startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// Functions Overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
   // Type Guard
   if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
   }
   return a + b;
}

const result = add('Mario', 'Morales');
result.split(' ');

const fetchedUserData = {
   id: 'u1',
   name: 'Mario',
   job: { title: 'CEO', description: 'My own company' }
};
console.log(fetchedUserData?.job?.title);

const userInput = undefined;
// const storedData = userInput || 'DEFAULT'; // check for falsy value (not strict null or undefined)
const storedData = userInput ?? 'DEFAULT'; // check if value is null or undefined

console.log(storedData);

