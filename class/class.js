"use strict";
// implement interface
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(`Hello ${this.name}`);
    }
    static sum(a, b) {
        console.log(a + b);
    }
}
let person1 = new Person("ben", 20);
person1.display();
Person.sum(1, 2);
// inheritance | extend class
class Employee extends Person {
    constructor(name, age, positon) {
        super(name, age);
        this.position = positon;
    }
}
let employee1 = new Employee("Ben", 20, "SE");
console.log(employee1.name);
console.log(employee1.age);
console.log(employee1.position);
employee1.display();
// generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['b', 'c', 'd']);
function array(a, b) {
    console.log(a, b);
}
function makeFullname(obj) {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
}
const v1 = makeFullname({ firstName: "ben", lastName: "xav", age: 22 });
console.log(v1);
let obj;
obj = {
    name: "ben"
};
let obj1;
obj1 = {
    name: "ben",
    car() {
        return 4;
    }
};
let names;
names = ["name", 1];
names.push(3);
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max' }, { age: 30 });
function countAndDescribe(element) {
    let description = 'Got no Value';
    if (element.length === 1) {
        description = 'Got 1 Element ';
    }
    else if (element.length > 1) {
        description = `Got ${element.length} Element`;
    }
    return [element, description];
}
// key of 
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: "ben" }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStrg = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
