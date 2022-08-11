// auto bind decorator 
function autoBind(_:any,_2:string,descriptor:PropertyDescriptor){
        const originalMethod = descriptor.value;
        const adjDescriptor:PropertyDescriptor = {
            configurable:true,
            get(){
                const boundFn = originalMethod.bind(this)
                return boundFn;
            }
        };
        return adjDescriptor // updating the property descriptor
}

// Project input class
 class ProjectInput  {
    templateElement:HTMLTemplateElement;
    hostElement:HTMLDivElement;
    element:HTMLFormElement;
    titleInputElement:HTMLInputElement;
    descriptionInputElement:HTMLTextAreaElement;
    peopleElement:HTMLInputElement;
    constructor(){
        this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement
        this.hostElement = document.getElementById("app")! as HTMLDivElement
   const importedNode = document.importNode(this.templateElement.content,true)
    this.element = importedNode.firstElementChild as HTMLFormElement
    this.element.id = 'user-input';
    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLTextAreaElement
    this.peopleElement = this.element.querySelector('#people') as HTMLInputElement
    this.configure()
    this.attach()
}
// private gatherUserInput():[string,string,number]{
//      const enteredTitle = this.titleInputElement.value;
//      const enteredDescription = this.descriptionInputElement.value;
//      const enteredPeople = this.peopleElement.value;
//      if(enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 || enteredPeople.trim().length === 0){

//      }
// }

@autoBind
private submitHandler(event:Event){
   event.preventDefault();
   console.log(this.titleInputElement.value)
}
private configure(){
   this.element.addEventListener('submit',this.submitHandler)
}
private attach(){
    this.hostElement.insertAdjacentElement('afterbegin',this.element);
}

 }


 const prjInput = new ProjectInput()