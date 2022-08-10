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