import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../../../core/services/storage/storage.service';
import { ApiService } from '../../../../core/services/api/api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  todoForm: FormGroup;
  submitted = false;
  todos;

  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private apiService: ApiService) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      id: null,
      name: ['', [Validators.required]],
      finished: false,
      finishedAt: null,
      description: ['', [Validators.required]]
    });
    this.apiService.getTodoList().subscribe((posts) => {
      this.todos = posts;
    })
  }

  onSubmit() {
    this.submitted = true;
    this.todoForm.value.id = Math.floor((Math.random() * 10000000) + 1);
    return this.apiService.addTodo(this.todoForm.value)
      .subscribe(
        res => {
          console.log(res);
        });
  }

  get f() {
    return this.todoForm.controls;
  }

  showAll() {
    this.apiService.getTodoList().subscribe((posts) => {
      this.todos = posts;
    })
  }

  showDone() {
    this.apiService.getTodoList().subscribe((todos) => {
      this.todos = this.apiService.getDone(todos);
    });
  }

  showNotDone() {
    this.apiService.getTodoList().subscribe((todos) => {
      this.todos = this.apiService.getNotDone(todos);
    });
  }
}
