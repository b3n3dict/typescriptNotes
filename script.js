"use strict";
exports.__esModule = true;
// varible types decleration
// sample
var message = "hello Benedict";
console.log(message);
// stirng
var name;
name = "ben";
// number
var age;
age = 20;
// boolean 
var status;
status = true;
// array type1
var list1 = [1, 2, 3, 4, 4];
// array type2
var list2 = [1, 2, 3, 4, 5];
// tuples  is a type the positon and item number should be  we same
var person = ['Bn', 22];
console.log(person);
// enum
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Grean"] = 1] = "Grean";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
;
var c = Colors.Grean;
console.log(c);
// functions 
var sum = function (num1, num2) {
    return num1 + num2;
};
console.log("sum:".concat(sum(1, 3)));
