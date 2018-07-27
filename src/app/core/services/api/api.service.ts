import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {IsDone, IsNotDone} from '../../../shared/utils/task-filters';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: Http) { }

  protected URL: string = environment.apiUrl;

  getTodoList() {
    return this.http.get(`${this.URL}`)
      .pipe(map(response => response.json()));
  }

  getTodo(id: number) {
    return this.http.get(`${this.URL}/${id}`)
      .pipe(map(response => response.json()));
  }

  addTodo(newTodo) {
    return this.http.post(`${this.URL}`, newTodo);
  }

  markDone(updatedTodo) {
    return this.http.put(`${this.URL}/${updatedTodo.id}`, updatedTodo);
  }

  delete(id) {
    return this.http.delete(`${this.URL}/${id}`);
  }

  getDone(todos) {
    let done = todos.filter(IsDone);
    return done;
  }

  getNotDone(todos) {
    let notDone = todos.filter(IsNotDone);
    return notDone;
  }

}
