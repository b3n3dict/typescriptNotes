import { Component } from './base-component';
import { autoBind } from '../decorators/autobind-decorator';
import {Project,ProjectStatus} from '../models/project-model'
import {DragTarget} from '../models/drag-drop-interfaces'
import { projectState } from '../state/project-state';
import { ProjectItem } from './project-item';
    // projectList class
export class ProjectList extends Component<HTMLDivElement,HTMLElement> implements DragTarget{
    assignedProjects:Project[];
   
    constructor(private type:'active' | 'finished'){
       super("project-list","app",false,`${type}-projects`)
        this.assignedProjects = []
    this.configure()
    this.renderContent()
    }
    @autoBind
    dragOverHandler(event: DragEvent): void {
        if(event.dataTransfer && event.dataTransfer.types[0]=== 'text/plain'){
            event.preventDefault()
            const listEl = this.element.querySelector('ul')!;
            listEl.classList.add('droppable')
        }
     
    }
    @autoBind
    dropHandler(event: DragEvent): void {
       const prjId =  event.dataTransfer!.getData('text/plain')
       projectState.moveProject(prjId,this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished )
    }
    
    @autoBind
    dragLeaveHandler(_: DragEvent): void {
        const listEl = this.element.querySelector('ul')!;
        listEl.classList.remove('droppable')
    }


    configure(): void {
        this.element.addEventListener('dragover',this.dragOverHandler)
        this.element.addEventListener('dragleave',this.dragLeaveHandler)
        this.element.addEventListener('drop',this.dropHandler)
        projectState.addListner((projects:Project[]) =>{
            const releventProjects = projects.filter(prj=>
                {
                    if(this.type ==='active'){
                       return prj.status === ProjectStatus.Active
                    }
                    return prj.status === ProjectStatus.Finished
                });
            this.assignedProjects = releventProjects;
            this.renderProjects()
        })


    } 
      renderContent()
    {
         const listId = `${this.type}-project-list`;
         this.element.querySelector('ul')!.id = listId;
         this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECT'
    }   
  private renderProjects(){
        const listEl = document.getElementById(`${this.type}-project-list`)! as HTMLUListElement
         listEl.innerHTML = '';
        for(const prjItem of this.assignedProjects){
             new ProjectItem(this.element.querySelector('ul')!.id,prjItem)
        }
      
        
  }  



}
