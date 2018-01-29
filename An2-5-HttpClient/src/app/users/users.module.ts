import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule, usersRouterComponents} from './users.routing.module';
import {UsersAPIProvider} from './users.config';
import {UserComponent, UserArrayService, UserResolveGuard, UserObservableService} from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ],
  declarations: [
    usersRouterComponents,
    UserComponent,
  ],
  providers: [
    UserArrayService,
    UserResolveGuard,
    UsersAPIProvider,
    UserObservableService
  ]
})
export class UsersModule {
}
