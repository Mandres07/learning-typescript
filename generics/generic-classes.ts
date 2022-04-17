// Generic classes

class DataStorage<T extends string | number | boolean> {
   private data: T[] = [];

   addItem(item: T) {
      this.data.push(item);
   }

   removeItem(item: T) {
      if (this.data.indexOf(item) === -1)
         return;
      this.data.splice(this.data.indexOf(item), 1);
   }

   getItems() {
      return [...this.data];
   }
};

const textStorage = new DataStorage<string>();
textStorage.addItem('Mario');
textStorage.addItem('Andres');
textStorage.removeItem('Mario');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(20);
numberStorage.addItem(50);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// const marioObj = { name: 'Mario' }
// objStorage.addItem(marioObj);
// objStorage.addItem({ name: 'Andres' });
// //....
// objStorage.removeItem(marioObj);
// console.log(objStorage.getItems());

interface CourseGoal {
   title: string;
   description: string;
   completeUntil: Date;
};

// Partial Generic class creates an object with all properties being optional
function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
   let courseGoal: Partial<CourseGoal> = {};
   courseGoal.title = title;
   courseGoal.description = description;
   courseGoal.completeUntil = date;
   return courseGoal as CourseGoal;
}

// Readonly generic class makes any type to be onle for reading purposes
const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');