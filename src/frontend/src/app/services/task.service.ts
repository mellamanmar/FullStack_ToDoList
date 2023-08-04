import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private domain = 'http://localhost:3000/todo'
  constructor(private http : HttpClient) { }

  addTask(newToDo: any) {
    return this.http.post<any>(this.domain + '/create', newToDo)
  }
}
