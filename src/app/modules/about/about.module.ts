import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './containers/about/about.component';
import { RouterModule } from './../../../../node_modules/@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: AboutComponent 
      }])
  ],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
