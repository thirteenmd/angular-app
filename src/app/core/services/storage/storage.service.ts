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

  markDone(todo){
    let todos = this.getTodoList();
    todo.finished = true;
    todo.finishedAt = new Date();
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == todo.id) {
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

  isDone(element, index, array) {
    return (element.finished == true);
  }

  isNotDone(element, index, array) {
    return (element.finished == false);
  }

  getDone(){
    let todos = this.getTodoList();
    return todos.filter(this.isDone);;
  }

  getNotDone(){
    let todos = this.getTodoList();
    return todos.filter(this.isNotDone);;
  }
}
