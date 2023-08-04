 import { Component, OnInit } from '@angular/core';
 import {TaskService} from '../../services/task.service'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  newToDo = {
    task: '',
    task_responsable: '',
    deadline: '',
    status: '',
    update: ''
  }

  constructor(private taskService : TaskService) {}
  ngOnInit(): void {
  }

  addTask() {
    this.taskService.addTask(this.newToDo)
    .subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }
}
