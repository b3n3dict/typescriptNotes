
///<reference path='../components/base-component.ts'/>
///<reference path='../decorators/autobind-decorator.ts'/>
///<reference path='../util/validation.ts'/>

namespace App{
    // Project input class
 export class ProjectInput extends Component<HTMLDivElement,HTMLFormElement> {
    titleInputElement:HTMLInputElement;
    descriptionInputElement:HTMLTextAreaElement;
    peopleElement:HTMLInputElement;
    constructor(){
        super("project-input","app",true,'user-input')
    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLTextAreaElement
    this.peopleElement = this.element.querySelector('#people') as HTMLInputElement
    this.configure()
}
private clearInputs():void{
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = ''; 
   this.peopleElement.value = ''; 
    
}
private gatherUserInput():[string,string,number] | void{
     const enteredTitle = this.titleInputElement.value;
     const enteredDescription = this.descriptionInputElement.value;
     const enteredPeople = this.peopleElement.value;

     const titleValidatable:Validatable = {
        value:enteredTitle,
        requiered:true
     }
     const descriptionValidatable:Validatable = {
        value:enteredDescription,
        requiered:true,
        minLength:5
     }
     const personValidatable:Validatable = {
        value:enteredPeople,
        requiered:true,
        min:1
     }

     if(!validate(titleValidatable)||
     !validate(descriptionValidatable)||
     !validate(personValidatable)){
         alert("Invalid input,please try again!");
         return;
     }else{
        return [enteredTitle,enteredDescription,+enteredPeople]
     }
}

@autoBind
private submitHandler(event:Event){
   event.preventDefault();
  const userInput = this.gatherUserInput()
  if(Array.isArray(userInput)){
    const [title,description,people]  = userInput;
    projectState?.addProject(title,description,people)
    this.clearInputs()
  }
}
 configure(){
   this.element.addEventListener('submit',this.submitHandler)
}
  renderContent(): void {
      
  }
 }

}