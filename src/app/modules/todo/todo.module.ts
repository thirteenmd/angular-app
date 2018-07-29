import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './containers/todo-page/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: TodoComponent
    }])

  ],
  declarations: [TodoComponent],
  exports: [TodoComponent]
})
export class TodoModule { }
