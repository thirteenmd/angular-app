import { Component, OnInit, OnDestroy } from '@angular/core';
//import Todos from '../../../../shared/models/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

  todos: Todos;

  constructor() { }

  ngOnInit() {
    // let todo = this.todos;
    // const car = localStorage.setItem('myTodos', JSON.stringify(todo));
    // console.log(this.todos[0].name)
  }

  onSubmit() {
    const task = {
      // id: this.todos.id,
       name: this.todos.name,
      // finished: this.todos.finished,
      // finishedAt: {
      //   date: this.todos.finishedAt.date,
      //   description: this.todos.finishedAt.description,
      // }
    }

    console.log(name)

  }

  ngOnDestroy() {

  }
}
interface Todos {
  // id: number;
   name: string;
  // finished: boolean;
  // finishedAt: {
  //   date: string;
  //   description: string;
  // }
}
