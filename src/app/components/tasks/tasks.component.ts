import { Component, OnInit } from '@angular/core';
import type { Task } from 'src/app/Task.type';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () =>
          (this.tasks = this.tasks.filter(
            (deletedTask) => deletedTask.id !== task.id
          ))
      );
  }

  toggleReminder(task: Task) {
    this.taskService.updateTaskReminder(task).subscribe((updatedTask) => {
      task.reminder = !updatedTask.reminder;
    });
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
