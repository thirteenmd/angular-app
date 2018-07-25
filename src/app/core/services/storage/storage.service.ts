import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  getTodoList(){
    let restoredTodos = JSON.parse(localStorage.getItem('myTodos'));
    if (restoredTodos == null) {
      restoredTodos = [];
    }
    return restoredTodos;
  }

  addTodo(newTodo){
    let todos = this.getTodoList();
    newTodo.id = Math.floor((Math.random() * 10000) + 1);
    todos.push(newTodo);
    localStorage.setItem('myTodos', JSON.stringify(todos));
  }

  getTodo(id){
    let todos = this.getTodoList();
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        return todos[i];
      } 
    }
  }

  markDone(id){
    let todos = this.getTodoList();
    let todo = this.getTodo(id);
    todo.finished = true;
    todo.finishedAt = new Date();
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        todos[i] = todo;
        break;
      } 
    }
    localStorage.setItem('myTodos', JSON.stringify(todos));
  }

  delete(id){
    let todos = this.getTodoList();
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        todos.splice(i, 1);
        break;
      } 
    }
    localStorage.setItem('myTodos', JSON.stringify(todos));
  }

  getDone(){
    let todos = this.getTodoList();
    let done = [];
    for(let item of todos){
      if(item.finished == true){
        done.push(item);
      }
    }
    return done;
  }

  getNotDone(){
    let todos = this.getTodoList();
    let notDone = [];
    for(let item of todos){
      if(item.finished == false){
        notDone.push(item);
      }
    }
    return notDone;
  }
}
