import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab-ToDoList';
  ToDoList: Todo[];
  newtask: string = '';
  edittask: string = '';
  oldtask: string= '';


  constructor() {
    this.ToDoList = [
      {task: 'Laundry', completed: false},
      {task: 'Dishes', completed: false},
      {task: 'Clear Driveway', completed: true}
      
    ]
  }


  addTask() {
    this.ToDoList.push(
      { task: this.newtask, completed: false}
    )
  }
  completeTask(job: any){
    for (let i:number = 0; i < this.ToDoList.length; i++) {
       if (this.ToDoList[i].task == job) {
        this.ToDoList[i].completed = true;
         }
     }
     
  }
  removeTask(job: any){
    for (let i:number = 0; i < this.ToDoList.length; i++) {
       if (this.ToDoList[i].task == job) {
        this.ToDoList.splice(i, 1);
         }
     }
     
  }
  editTask(job : any) {

  for (let i:number = 0; i < this.ToDoList.length; i++) {
    if (this.ToDoList[i].task == 'Dishes') {
     this.ToDoList[i].task == 'turkey';
      }
  }
  
}


}
