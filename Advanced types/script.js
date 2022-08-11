"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let employee = {
    id: 1,
    name: "Ben",
    retire: (date) => {
        console.log(date);
    }
};
// union types 
function kgToLbs(weight) {
    // narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
// intersection 
let weight;
let textBox = {
    drag() {
    },
    resize() {
    }
};
let quantity = 50;
// nullable 
function great(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else
        console.log('hola');
}
great(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
// type assersion   | treat entity diffrent as diffrent type
let val;
let val2 = val;
let val3 = val;
const user1 = {
    id: 1,
    name: "ben"
};
const add = (x, y) => x + y;
