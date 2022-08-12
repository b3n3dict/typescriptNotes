// Project type 
enum ProjectStatus {
    Active,
    Finished
}

class Project {
    constructor(public id:string,public title:string,public description:string,public people:number,public status:ProjectStatus){

    }
}

// Project state Management
type Listner = (items:Project[])=>void;
class ProjectState {
    private listners:Listner[] = [];
    private projects:Project[] = []
    private static instance:ProjectState;
     private constructor() {
          
     }
     static getInstance(){
        if(this.instance){
            return this.instance
        }
         this.instance = new ProjectState();
         return this.instance
     }
    addListner(listnerFn:Listner){
        this.listners.push(listnerFn)
     }
    addProject(title:string,description:string,numOfPeople:number){
        const newProject = new Project(Math.random().toString(),title,description,numOfPeople,ProjectStatus.Active)
        this.projects.push(newProject)
        for(const listnerFn of this.listners){
            listnerFn(this.projects.slice());
        }
    }
   
}
// singleton
const projectState = ProjectState.getInstance()!


// validation
interface Validatable {
   value:string|number;
   requiered?:boolean;
   minLength?:number;
   maxLength?:number;
   min?:number;
   max?:number;
}

function validate(validatableInput:Validatable){
    let isValid = true;
    if(validatableInput.requiered){
        isValid = isValid && validatableInput.value.toString().trim().length !==0;
    }
    if(validatableInput.minLength != null  && typeof validatableInput.value === "string"){
          isValid = isValid && validatableInput.value.length >= validatableInput.minLength
    }
    if(validatableInput.maxLength != null  && typeof validatableInput.value === "string"){
          isValid = isValid && validatableInput.value.length <= validatableInput.maxLength
    }
    if(validatableInput.min != null && typeof validatableInput.value === 'number'){
     isValid = isValid && validatableInput.value >= validatableInput.min
    }
    if(validatableInput.max != null && typeof validatableInput.value === 'number'){
     isValid = isValid && validatableInput.value <= validatableInput.max
    }
    return isValid
}

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

// projectList class
class projectList {
    templateElement:HTMLTemplateElement;
    hostElement:HTMLDivElement;
    element:HTMLElement;
    assignedProjects:Project[];

    constructor(private type:'active' | 'finished'){
        this.templateElement = document.getElementById("project-list")! as HTMLTemplateElement
        this.hostElement = document.getElementById("app")! as HTMLDivElement
   const importedNode = document.importNode(this.templateElement.content,true);
    this.element = importedNode.firstElementChild as HTMLElement
    this.element.id = `${type}-projects`;
    this.assignedProjects = []
    projectState.addListner((projects:any[]) =>{
        this.assignedProjects = projects
        this.renderProjects()
    })
    this.attach()
    this.renderContent()
    }

  private renderProjects(){
        const listEl = document.getElementById(`${this.type}-project-list`)! as HTMLUListElement
        for(const prjItem of this.assignedProjects){
             const listItem = document.createElement('li')
             listItem.textContent = prjItem.title;
            
             listEl.appendChild(listItem)
        }
  }  
  private renderContent()
{
     const listId = `${this.type}-project-list`;
     this.element.querySelector('ul')!.id = listId;
     this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECT'
}    private attach(){
        this.hostElement.insertAdjacentElement('beforeend',this.element);
    }
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
private configure(){
   this.element.addEventListener('submit',this.submitHandler)
}
private attach(){
    this.hostElement.insertAdjacentElement('afterbegin',this.element);

}
  
 }


 const prjInput = new ProjectInput()
 const activePrjList = new projectList("active");
 const finishedPrjList = new projectList("finished");  