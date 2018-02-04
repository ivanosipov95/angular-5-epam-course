import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NgModuleFactoryLoader} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

import {AppRoutingModule, appRouterComponents} from './app.routing.module';
import {AppComponent} from './app.component';
import {TasksModule} from './tasks/tasks.module';
import {UsersModule} from './users/users.module';
import {CoreModule} from './components/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    appRouterComponents
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    TasksModule,
    UsersModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
