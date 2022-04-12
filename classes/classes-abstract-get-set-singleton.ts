abstract class Department {
   // private employees: string[] = []; ///only available in this class, not in inherited classes
   protected employees: string[] = []; ///avaliable in this class and any other that inherits this one
   static fiscalYear = 2022;
   constructor(protected readonly id: string, private name: string) { }

   static createEmployee(name: string) {
      return { name: name };
   }

   abstract describe(this: Department): void; // forces every class that inherits this to implement describe method
   // this class should be abstract one and cannot be instanciated

   // describe(this: Department) { 
   //    console.log(`Department (${this.id}): ${this.name}`);
   // }

   addEmployee(employee: string) {
      this.employees.push(employee);
   }

   printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
   }
}

class ITDepartment extends Department {
   admins: string[];
   constructor(id: string, admins: string[]) {
      super(id, 'IT'); // to execute the father lass constructor
      this.admins = admins;
   }

   describe() {
      console.log('IT Department - ID: ' + this.id);
   }
}

class AccountingDepartment extends Department {
   private lastReport: string;
   private static instance: AccountingDepartment;

   get mostRecentReport() { // getter method to make a private field to be accesible via a function
      if (this.lastReport) {
         return this.lastReport;
      }
      throw new Error('No report found.');
   }

   set mostRecentReport(value: string) { // setter method to set private values in a secure way via function
      if (!value) {
         throw new Error('Please pass in a valid value');
      }
      this.addReport(value);
   }

   private constructor(id: string, private reports: string[]) {
      super(id, 'Accounting'); // to execute the father lass constructor
      this.lastReport = reports[0];
   }

   // Singleton pattern, we have to make a private constructor and 
   // then create the instance in an static method
   static getInstance() {
      if (this.instance) {
         return this.instance;
      }
      this.instance = new AccountingDepartment('A3', []);
      return this.instance;
   }

   describe() {
      console.log('Accounting Department - ID: ' + this.id);
   }

   addEmployee(name: string) {
      if (name === 'Mandres') {
         return;
      }
      this.employees.push(name);
   }

   addReport(text: string) {
      this.reports.push(text);
      this.lastReport = text;
   }

   printReports() {
      console.log(this.reports);
   }
}

const employee1 = Department.createEmployee('Julio');
console.log(employee1, Department.fiscalYear);

// const sales = new Department('Sales', 'A1');
// sales.addEmployee('Mario');
// sales.addEmployee('Judith');
// sales.printEmployeeInformation();
// sales.describe();

const it = new ITDepartment('A2', ['Andres']);
it.addEmployee('Andres');
it.addEmployee('Raquel');
it.printEmployeeInformation();
it.describe();
console.log(it);

// const accounting = new AccountingDepartment('A3', []);
const accounting = AccountingDepartment.getInstance();
accounting.addEmployee('Ramiro');
accounting.addEmployee('Maria');
accounting.addEmployee('Mandres');
// accounting.printEmployeeInformation();
accounting.addReport('Something went wrong');
accounting.mostRecentReport = 'The new report';
console.log(accounting.mostRecentReport);
// accounting.printReports();
accounting.describe();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting);
console.log(accounting2);