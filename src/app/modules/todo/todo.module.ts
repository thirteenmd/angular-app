import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './containers/todo-page/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '../../../../node_modules/@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      component: TodoComponent 
      }])
    
  ],
  declarations: [TodoComponent],
  exports: [TodoComponent]
})
export class TodoModule { }
