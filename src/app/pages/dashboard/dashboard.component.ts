import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TasksStore } from '../../store/todos/todos.store';
import { ActionBarComponent } from '@ui/action-bar/action-bar.component';
import { AddTaskComponent } from '@ui/add-task/add-task.component';
import { DashboardLaneComponent } from '@ui/dashboard-lane/dashboard-lane.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardLaneComponent, ActionBarComponent, JsonPipe, MatDialogModule, MatProgressSpinnerModule],
  templateUrl: './dashboard.component.html',
  providers: [TasksStore],
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  readonly store = inject(TasksStore);
  private dialogService: MatDialog = inject(MatDialog);

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
