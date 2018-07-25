import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './containers/contact-page/contact-page.component';
import { RouterModule } from './../../../../node_modules/@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ContactPageComponent 
      }])
  ],
  declarations: [ContactPageComponent],
  exports: [ContactPageComponent]
})
export class ContactModule { }
