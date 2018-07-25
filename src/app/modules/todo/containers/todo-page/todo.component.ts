import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../../../core/services/storage/storage.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit, OnChanges {

  todoForm: FormGroup;
  submitted = false;
  todos = this.storageService.getTodoList();

  constructor(private formBuilder: FormBuilder, private storageService: StorageService) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      id: null,
      name: ['', [Validators.required]],
      finished: false,
      finishedAt: null,
      description: ['', [Validators.required]]
    });
    this.todos = this.storageService.getTodoList();
  }

  onSubmit() {
    this.submitted = true;
    this.storageService.addTodo(this.todoForm.value);
    this.todos = this.storageService.getTodoList();
  }

  get f() {
    return this.todoForm.controls;
  }

  ngOnChanges() {
    // this.todos = this.storageService.getTodoList();
  }

  showAll(){
    this.todos = this.storageService.getTodoList();
  }

  showDone(){
    this.todos = this.storageService.getDone();
  }

  showNotDone(){
    this.todos = this.storageService.getNotDone();
  }
}
