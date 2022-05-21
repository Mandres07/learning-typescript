// A decorator is a function applied
function Logger(constructor: Function) {
   console.log('Logging...');
   console.log(constructor);
}

// A decorator factory
function Logger2(logString: string) {
   return function (constructor: Function) {
      console.log(logString);
      console.log(constructor);
   };
}

function WithTemplate(template: string, hookId: string) {
   return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
      return class extends originalConstructor {
         constructor(..._: any[]) {
            super();
            console.log('Redering template...');
            const element = document.getElementById(hookId);
            // const p = new originalConstructor();
            if (element) {
               element.innerHTML = template;
               element.querySelector('h1')!.textContent = this.name;
            }
         }
      };
   }
}

// This way you apply a decorator to a class. 
// This is executed when the class is defined, not when instantated.
@Logger2('LOGGING PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
   name = 'Max';

   constructor() {
      console.log('Creating Person object...');
   }
}

const person = new Person();
console.log(person);

// a class Property decorator
function Log(target: any, propertyName: string | Symbol) {
   console.log('Property decorator!');
   console.log(target, propertyName);
}

// a class Accessor / Setter / Getter decorator
function Log2(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
   console.log('Accessor decorator!');
   console.log(target);
   console.log(name);
   console.log(descriptor);
}

// a class function Decorator
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor): PropertyDescriptor {
   console.log('Method decorator!');
   console.log(target);
   console.log(name);
   console.log(descriptor);
   return {};
}

// a Parameter decorator
function Log4(target: any, name: string | Symbol, position: number) {
   console.log('Parameter decorator!');
   console.log(target);
   console.log(name);
   console.log(position);
}

class Product {
   @Log
   title: string;
   private _price: number;

   @Log2
   set price(val: number) {
      if (val > 0) {
         this._price = val;
      }
      else {
         throw new Error('Invalid price - shoud be positive');
      }
   }

   constructor(t: string, p: number) {
      this.title = t;
      this._price = p;
   }

   @Log3
   getPriceWithTax(@Log4 tax: number) {
      return this._price * (1 + tax);
   }
}

const product = new Product('Book', 10);
const product2 = new Product('Ball', 25.99);

// An autobind function decorator
function AutoBind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor) {
   const originalMethod = descriptor.value;
   const adjustedDescriptor: PropertyDescriptor = {
      configurable: true,
      enumerable: false,
      get() {
         const boundFn = originalMethod.bind(this);
         return boundFn;
      }
   };
   return adjustedDescriptor;
}

class Printer {
   message = 'This works';

   @AutoBind
   showMessage() {
      console.log(this.message);
   }
}

const p = new Printer();
const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

interface ValidatorConfig {
   [property: string]: {
      [validatableProp: string]: string[]
   }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
   registeredValidators[target.constructor.name] = {
      ...registeredValidators[target.constructor.name],
      [propName]: [
         ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
         'required'
      ]
   };
}

function PositiveNumber(target: any, propName: string) {
   registeredValidators[target.constructor.name] = {
      ...registeredValidators[target.constructor.name],
      [propName]: [
         ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
         'positive'
      ]
   };
}

function validate(obj: any) {
   let isValid = true;
   const objValidatorConfig = registeredValidators[obj.constructor.name];
   if (!objValidatorConfig) {
      return isValid;
   }
   for (const prop in objValidatorConfig) {
      for (const validator of objValidatorConfig[prop]) {
         switch (validator) {
            case 'required':
               isValid = isValid && !!obj[prop];
               break;
            case 'positive':
               isValid = isValid && obj[prop] > 0;
               break;
         }
      }
   }
   return isValid;
}

class Course {
   @Required
   title: string;

   @PositiveNumber
   price: number;

   constructor(t: string, p: number) {
      this.title = t;
      this.price = p;
   }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
   event.preventDefault();
   const titleEl = document.getElementById('title') as HTMLInputElement;
   const priceEl = document.getElementById('price') as HTMLInputElement;
   const title = titleEl.value;
   const price = +priceEl.value;

   const createdCourse = new Course(title, price);
   if (!validate(createdCourse)) {
      alert('Invalid input, please try again!');
      return;
   }
   console.log(createdCourse);
});