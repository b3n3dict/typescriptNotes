
// interface 
interface PersonInterface {
  name:string;
  age:number;
  display():void;
}

// implement interface
class Person implements PersonInterface {
    name:string;
    age:number;
  constructor(name:string,age:number){
     this.name = name;
     this.age = age
  }
  display():void{
      console.log(`Hello ${this.name}`)  
  } 
  static sum(a:number,b:number){
     console.log(a+b)
  }
}
 
let person1 = new Person("ben",20)

person1.display()
Person.sum(1,2)
// inheritance | extend class
class Employee extends Person {
    position : string
    constructor(name:string,age:number,positon:string){
        super(name,age)
        this.position  = positon;
        
    }
   
}

let employee1 = new Employee("Ben",20,"SE")
console.log(employee1.name)
console.log(employee1.age)
console.log(employee1.position) 
employee1.display()

// generics
function getArray<T>(items:T[]): T[]{
  return new Array().concat(items)
}

let numArray = getArray([1,2,3,4])
let strArray = getArray<string>(['b','c','d'])

function array<T,Y>(a:T,b:Y):void{
      console.log(a,b)
}

function makeFullname<T extends {firstName:string,lastName:string}>(obj:T){
  return {
    ...obj,
    fullName:obj.firstName + " " + obj.lastName
  }
}
const v1 = makeFullname({firstName:"ben",lastName:"xav",age:22})
console.log(v1)

 type Sample =  {
  name:string;
  car?():number;
 }
 let obj:Sample;
 
 obj = {
  name:"ben"
 }

 interface Sample1   {
  name:string;
  car?():number;
 }
 let obj1:Sample1;
 
 obj1 = {
  name:"ben",
  car(){
    return 4;
  }
 }

 let names:(string|number)[];
 names = ["name",1]
 names.push(3)

 function merge<T extends object,U extends object>(objA:T,objB:U){
  return Object.assign(objA,objB)
}

const mergedObj = merge({name:'Max'},{age:30}) 


interface lengthy {
 length:number
}

function countAndDescribe<T extends lengthy >(element:T){
    let description = 'Got no Value'
    if(element.length === 1){
       description = 'Got 1 Element '
    }else if(element.length > 1){
      description = `Got ${element.length} Element`
    }
    return [element,description]

}

// key of 

function extractAndConvert<T extends object,U extends keyof T>(obj:T,key:U){
  return  obj[key]
}

console.log(extractAndConvert({name:"ben"},'name'))


class DataStorage<T> {

 private data : T[] = [];

 addItem(item:T){
   this.data.push(item)
 }
 removeItem(item:T){
   this.data.splice(this.data.indexOf(item),1)
 }
 getItems(){
   return [...this.data]
 } 
}

const textStrg= new DataStorage<string>() 
 
interface CourseGoal {
 title:string;
 description:string,
 completeUntil:Date
}


function createCourseGoal(title:string,description:string,date:Date):CourseGoal{
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date
    return courseGoal as CourseGoal
}



