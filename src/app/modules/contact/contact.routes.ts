import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactPageComponent} from './containers/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContactPageComponent
  }
];

export const contactRoutes: ModuleWithProviders = RouterModule.forChild(routes);
