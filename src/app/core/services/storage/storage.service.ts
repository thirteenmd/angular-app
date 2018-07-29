import { Injectable } from '@angular/core';
import { IsDone, IsNotDone } from '../../../shared/utils/task-filters';
import { Observable } from '../../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  todos: Array<any> = [];

  constructor() {
    this.todos = JSON.parse(localStorage.getItem('myTodos'));
  }

  getTodoList(): Observable<Array<any>> {
    return new Observable<Array<any>>((observer) => {
      if (this.todos == null || this.todos.length == 0)
        this.todos = [];
      observer.next(this.todos);
      observer.complete();
      return {
        unsubscribe() { }
      };
    });
  }

  addTodo(newTodo): Observable<Array<any>> {
    return new Observable<Array<any>>((observer) => {
      if (this.todos == null || this.todos.length == 0)
        this.todos = [];
      this.todos.push(newTodo);
      localStorage.setItem('myTodos', JSON.stringify(this.todos));

      observer.next(newTodo);
      observer.complete();
      return {
        unsubscribe() { }
      };
    });
  }

  getTodo(id): Observable<any> {
    return new Observable<any>((observer) => {
      observer.next(this.todos.find((todo) => todo.id === id));
      observer.complete();
      return {
        unsubscribe() { }
      };
    });
  };

  markDone(todo) {
    return new Observable<any>((observer) => {
      let todoIndex = this.todos.indexOf(todo);
      this.todos.fill(todo, todoIndex, todoIndex + 1);
      localStorage.setItem('myTodos', JSON.stringify(this.todos));
      observer.next(todo)
      observer.complete();
      return {
        unsubscribe() { }
      };
    });
  }

  delete(id) {
    return new Observable<any>((observer) => {
      let todo;
      this.getTodo(id).subscribe((element) => {
        todo = element;
        let index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
      })
      localStorage.setItem('myTodos', JSON.stringify(this.todos));
      observer.next(todo);
      observer.complete();
      return {
        unsubscribe() { }
      };
    });
  }

  getDone(todos) {
    return todos.filter(IsDone);;
  }

  getNotDone(todos) {
    return todos.filter(IsNotDone);;
  }
}
