class Department4 {
   private employees: string[] = [];

   constructor(private readonly id: string, private name: string) { }

   describe(this: Department4) {
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

class ITDepartment extends Department4 {
   admins: string[];
   constructor(id: string, admins: string[]) {
      super(id, 'IT'); // to execute the father lass constructor
      this.admins = admins;
   }
}

class AccountingDepartment extends Department4 {
   constructor(id: string, private reports: string[]) {
      super(id, 'Accounting'); // to execute the father lass constructor
   }

   addReport(text: string) {
      this.reports.push(text);
   }

   printReports() {
      console.log(this.reports);
   }
}

const sales = new Department4('Sales', 'A1');
sales.addEmployee('Mario');
sales.addEmployee('Judith');
sales.printEmployeeInformation();
sales.describe();

const it = new ITDepartment('A2', ['Andres']);
it.addEmployee('Andres');
it.addEmployee('Raquel');
it.printEmployeeInformation();
it.describe();
console.log(it);

const accounting = new AccountingDepartment('A3', []);
accounting.addEmployee('Ramiro');
accounting.addEmployee('Maria');
accounting.printEmployeeInformation();
accounting.addReport('Something went wrong');
accounting.printReports();
accounting.describe();
console.log(accounting);