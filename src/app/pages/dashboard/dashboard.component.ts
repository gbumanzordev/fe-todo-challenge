import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { DashboardLaneComponent } from '../../ui/dashboard-lane/dashboard-lane.component';
import { ActionBarComponent } from '../../ui/action-bar/action-bar.component';
import { TaskResponse } from '../../shared/models/api-response.model';
import { Status } from '../../shared/models/types';
import { TasksStore } from '../../store/todos/todos.store';
import { JsonPipe } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddTaskComponent } from '../../ui/add-task/add-task.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardLaneComponent, ActionBarComponent, JsonPipe, MatDialogModule],
  templateUrl: './dashboard.component.html',
  providers: [TasksStore],
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  readonly store = inject(TasksStore);
  private dialogService: MatDialog = inject(MatDialog);

  lanes = computed(() => {
    const foundLanes: Record<Status, TaskResponse[]> = {
      BACKLOG: [],
      TODO: [],
      IN_PROGRESS: [],
      DONE: [],
      CANCELLED: [],
    };

    this.store.tasks().forEach((task) => {
      foundLanes[task.status] = [...foundLanes[task.status], task];
    });

    return Object.entries(foundLanes)
      .map(([key, value]) => {
        return { title: key, items: value };
      })
      .filter((lane) => lane.items.length);
  });

  toggle(index: number): void {
    console.log({ index });
  }

  callToAction(): void {
    this.dialogService.open(AddTaskComponent, {
      width: '624px',
      height: '224px',
      disableClose: true,
    });
  }
}
