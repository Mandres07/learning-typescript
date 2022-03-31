class Department3 {
   private employees: string[] = [];

   constructor(private readonly id: string, private name: string) { }

   describe(this: Department3) {
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

const sales = new Department3('Sales', 'A1');
sales.addEmployee('Mario');
sales.addEmployee('Judith');
sales.printEmployeeInformation();
sales.describe();