 import { Component, OnInit } from '@angular/core';
 import {TaskService} from '../../services/task.service';
 import { Observable } from 'rxjs';
//  import { ToDo } from '../../ToDo'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  toDo: any [] = []
  newToDo: any [] = []

  constructor(private taskService : TaskService) {  }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks() {
    this.taskService.getTasks()
    .subscribe(toDo => {this.toDo = toDo
      console.log (this.toDo)
    })

  }

  addTask() {
    this.taskService.addTask(this.newToDo)
    .subscribe( (data) => {this.newToDo = data})
  }


}
