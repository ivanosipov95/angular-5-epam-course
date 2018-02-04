import { Component, OnInit } from '@angular/core';

import { Task } from '../../task.model';
import { TaskArrayService } from '../services/task-array.service';

@Component({
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Array<Task>;

  constructor(
    private taskArrayService: TaskArrayService) { }

  ngOnInit() {
    this.getTasks().catch(err => console.log(err));
  }

  completeTask(task: Task): void {
    this.taskArrayService.completeTask(task);
  }

  editTask(task: Task): void {

  }

  private async getTasks() {
    this.tasks = await this.taskArrayService.getTasks();
  }
}
