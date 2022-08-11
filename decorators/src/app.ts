function Logger(logString:string){
     return function(constructor:Function){ // recorator factories  => give more controll from outside
        console.log(constructor);
        console.log(logString);
     }
}

function WithTemplate(template:string,hookId:string){
    return function(constructor:any){
        console.log('rendring templates');
       const hookEl = document.getElementById(hookId);
       const person = new constructor();
       if(hookEl){
        hookEl.innerHTML = template;
        hookEl.querySelector('h1')!.textContent = person.name;
       }
    }
}
@Logger("Loging...")   // decorator runs when js find your class definiton
@WithTemplate('<h1>My person object</h1>','app')
class Person {
    name = "max"
    constructor(){
        console.log('Creating person object...');
    }
}


const pers = new Person();

console.log(pers)



// --
function Log(target:any,propertyName:string|symbol){
    console.log('Property decorator!')
    console.log(target,propertyName)
}
function Log2(target:any,name:string,descriptor:PropertyDescriptor){
    console.log('acces decorator!')
    console.log(target)
    console.log(name)
    console.log(descriptor)
}
function Log3(target:any,name:string|Symbol,descriptor:PropertyDescriptor){
    console.log("method decorator!")
    console.log(target)
    console.log(name)
    console.log(descriptor)
}
function Log4(target:any,name:string|Symbol,positon:number){
    console.log("parameter decorator!")
    console.log(target)
    console.log(name)
    console.log(positon)
}
class Product {
    @Log
    title:string
    private _price:number
    @Log2
    set price(val:number) {
      if(val>0){
        this._price  = val;
      }else{
        throw new Error('Invalid price')
      }
    }
    constructor(t:string,p:number){
        this.title = t;
        this._price = p;
    }
    @Log3
    getPriceWithTax(@Log4 tax:number){
        return this._price * (1+tax);

    }
}