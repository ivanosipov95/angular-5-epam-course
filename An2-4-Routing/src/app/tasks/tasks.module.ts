import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TasksRoutingModule} from './tasks.routing.module';
import {TaskListComponent, TaskComponent, TaskArrayService, TaskFormComponent} from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule
  ],
  declarations: [
    TaskListComponent,
    TaskComponent,
    TaskFormComponent
  ],
  providers: [
    TaskArrayService
  ]
})
export class TasksModule {
}
