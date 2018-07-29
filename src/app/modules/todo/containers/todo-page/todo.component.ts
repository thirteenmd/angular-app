import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../../../core/services/storage/storage.service';
import { ApiService } from '../../../../core/services/api/api.service';
import { GenerateId } from './../../../../shared/utils/id-generator'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  todoForm: FormGroup;
  submitted = false;
  todos = [];

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private storageService: StorageService) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      id: null,
      name: ['', [Validators.required]],
      finished: false,
      finishedAt: null,
      description: ['', [Validators.required]]
    });
    this.storageService.getTodoList().subscribe((posts) => {
      this.todos = posts;
    })
  }

  onSubmit() {
    this.submitted = true;
    this.todoForm.value.id = GenerateId();
    return this.storageService.addTodo(this.todoForm.value)
      .subscribe((post) => {
        this.todos.push(post)
      });
  }

  get f() {
    return this.todoForm.controls;
  }

  showAll() {
    this.storageService.getTodoList().subscribe((posts) => {
      this.todos = posts;
    })
  }

  showDone() {
    this.storageService.getTodoList().subscribe((todos) => {
      this.todos = this.storageService.getDone(todos);
    });
  }

  showNotDone() {
    this.storageService.getTodoList().subscribe((todos) => {
      this.todos = this.storageService.getNotDone(todos);
    });
  }
}
