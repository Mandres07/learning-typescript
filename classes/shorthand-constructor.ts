class Department2 {
   // private id: string;
   // private name: string;
   private employees: string[] = [];

   constructor(private name: string, private id: string) { }

   // constructor(_name: string, _id: string) {
   //    this.id = _id;
   //    this.name = _name;
   // }

   describe(this: Department2) {
      console.log(`Department (${this.id}): ${this.name}`);
   }

   addEmployee(employee: string) {
      this.employees.push(employee);
   }

   printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
   }
}

const sales = new Department2('Sales', 'A1');

sales.addEmployee('Mario');
sales.addEmployee('Judith');

// sales.employees[2] = 'Anna'; // Make sure to make this private
sales.printEmployeeInformation();

sales.describe();

// const salesCopy = { name: 'Mario', describe: sales.describe };
// salesCopy.describe();