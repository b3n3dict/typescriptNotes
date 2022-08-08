export {}

// varible types decleration

// sample
let message = "hello Benedict"

console.log(message)

// stirng
let name:string;
name = "ben"

// numbrt
let age:number;
age = 20;

// array
let list1:number[] = [1,2,3,4,4];


let list2:Array<number> = [1,2,3,4,5]



// tuples  is a type the positon and item number will we same
let person:[string,number] = ['Bn',22]

console.log(person)

// enum
enum Colors {Red,Grean,Blue};

let c:Colors = Colors.Grean
console.log(c)