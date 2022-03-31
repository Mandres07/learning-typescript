"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const sales = new Department('Sales', 'A1');
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
