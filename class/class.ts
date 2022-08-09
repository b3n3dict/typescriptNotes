
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