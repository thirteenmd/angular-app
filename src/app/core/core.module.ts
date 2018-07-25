import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InitService } from './services/init/init.service';
import { LoggerInterceptorService } from './interceptor/logger-interceptor.service';
import { HeaderComponent} from './header/header.component';
import { HomeComponent} from '../modules/home/containers/home/home.component';
import { ContactPageComponent} from '../modules/contact/containers/contact-page/contact-page.component';
import { AboutComponent} from '../modules/about/containers/about/about.component';
import { NavbarComponent} from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';

const COMPONENTS = [
  HeaderComponent,
  //TodoComponent,
  HomeComponent,
  //ContactPageComponent,
  //AboutComponent,
  NavbarComponent,
];

const MODULES = [
  RouterModule,
  HttpClientModule,
];

export function initAppFactory(initService: InitService) {
  return () => initService.getConfigurations();
}

@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS,
    DetailsComponent
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initAppFactory,
      deps: [InitService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
