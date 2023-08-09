import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { ToDo } from '../ToDo';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private domain = 'http://localhost:3000/todo'
  constructor(private http : HttpClient) { }

  public getTasks(): Observable<any> {
    return this.http.get<any>(this.domain + '/')
  }

  addTask(newToDo: any): Observable<any> {
    return this.http.post<any>(this.domain + '/create', newToDo)
  }

  // deleteTask(id: any) {
  //   return this.http.delete(`${this.domain}/delete/${id}`)
  // }

  // updateTask(newToDo: any) {
  //   return this.http.patch(`${this.domain}/update/${newToDo.id}`, newToDo)
  // }
}
