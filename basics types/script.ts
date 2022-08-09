export {}

// varible types decleration

// sample
let message = "hello Benedict"

console.log(message)

// stirng
let name:string;
name = "ben"

// number
let age:number;
age = 20;

// boolean 
  let status:boolean;
  status= true;

// array type1
let list1:number[] = [1,2,3,4,4];

// array type2
let list2:Array<number> = [1,2,3,4,5]



// tuples  is a type the positon and item number should be  we same
let person:[string,number] = ['Bn',22]

console.log(person)

// enum
enum Colors {Red,Grean,Blue};

let c:Colors = Colors.Grean
console.log(c)


// functions 

const sum = (num1:number,num2:number):number =>{
    return num1+num2;
}

console.log(`sum:${sum(1,3)}`)


