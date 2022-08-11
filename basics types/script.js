"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// varible types decleration
// sample
let message = "hello Benedict";
console.log(message);
// stirng
let name;
name = "ben";
// number
let age;
age = 20;
// boolean 
let status;
status = true;
// array type1
let list1 = [1, 2, 3, 4, 4];
// array type2
let list2 = [1, 2, 3, 4, 5];
// tuples  is a type the positon and item number should be  we same
let person = ['Bn', 22];
console.log(person);
// enum
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Grean"] = 1] = "Grean";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
;
let c = Colors.Grean;
console.log(c);
// functions 
const sum = (num1, num2) => {
    return num1 + num2;
};
console.log(`sum:${sum(1, 3)}`);
