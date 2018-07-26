import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageService } from './core/services/storage/storage.service';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { appRoutes} from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoDetailsPageComponent } from './modules/todo/containers/todo-details-page/todo-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    appRoutes,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
