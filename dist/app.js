"use strict";
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
;
const textStorage = new DataStorage();
textStorage.addItem('Mario');
textStorage.addItem('Andres');
textStorage.removeItem('Mario');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(20);
numberStorage.addItem(50);
console.log(numberStorage.getItems());
;
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['Max', 'Anna'];
