export {}
// type alias
type Employee = {
    readonly id:number,
     name:string,
     retire:(date:Date) => void
}

let employee:Employee = {
    id:1,
    name:"Ben",
    retire:(date:Date)=>{
      console.log(date)
    }
}

// union types 
function kgToLbs(weight:number|string):number{
// narrowing
if(typeof weight === 'number')
return weight*2.2;
else 
return parseInt(weight)*2.2
} 

// intersection 
let weight : number & string;  

type Draggable = {
    drag:()=>void;
}

type Resizable = {
    resize:()=>void;
}

type UIWidget = Draggable & Resizable ;

let textBox:UIWidget = {
    drag(){

    },
    resize(){

    }
}

// leteral types (exact or specific value)
type Quantity = 50 | 100
let quantity : Quantity = 50;

type Metric = "cm" | "inch"

// nullable 

function  great(name:string | null | undefined){
    if(name){
        console.log(name.toUpperCase())
    }else 
    console.log('hola')
    
}

great(null)

// optional chaing (?)
type Custormer  = {
    birthday : Date
}

function getCustomer(id:number):Custormer|null | undefined{
    return id === 0 ? null : {birthday:new Date()}
}

let customer = getCustomer(0)
console.log(customer?.birthday)


// type assersion   | treat entity diffrent as diffrent type
let val:any;
let val2 = <number>val;
let val3 = val as boolean;


// interface 
interface User {
   readonly id:number;
    name:string;
    age?:number
}

const user1:User = {
    id:1,
    name:"ben"
}

// interface can you with primitves or unions
// interface with funtion
interface MathFun {
    (x:number,y:number):number
}
const add : MathFun =(x:number,y:number):number => x+y