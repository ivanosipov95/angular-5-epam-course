import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, ExtraOptions} from '@angular/router';

import {AboutComponent, PageNotFoundComponent} from './components';
import {MessagesComponent, LoginComponent, AuthGuard, CustomPreloadingStrategyService  } from './core';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'messages',
    component: MessagesComponent,
    outlet: 'popup'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: 'app/admin/admin.module#AdminModule'
  },
  {
    path: 'users',
    loadChildren: 'app/users/users.module#UsersModule',
    data: { preload: true }
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PageNotFoundComponent
  }
];

export let appRouterComponents = [AboutComponent, PageNotFoundComponent];

// const extraOptions: ExtraOptions = {
//   preloadingStrategy: PreloadAllModules,
//   // enableTracing: true // Makes the router log all its internal events to the console.
// };

const extraOptions: ExtraOptions = {
  preloadingStrategy: CustomPreloadingStrategyService,
  // enableTracing: true // Makes the router log all its internal events to the console.
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, extraOptions)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
