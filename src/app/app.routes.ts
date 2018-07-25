import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/containers/home/home.component';
import { TodoComponent } from './modules/todo/containers/todo-page/todo.component';
import { TodoDetailsPageComponent } from './modules/todo/containers/todo-details-page/todo-details-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'todo',
    loadChildren: './modules/todo/todo.module#TodoModule'
  },
  {
    path: 'todo/:id',
    component: TodoDetailsPageComponent,
    pathMatch:'full'
  },
  {
    path: 'contact',
    loadChildren: './modules/contact/contact.module#ContactModule'
  },
  {
    path: 'about',
    loadChildren: './modules/about/about.module#AboutModule'
  }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
