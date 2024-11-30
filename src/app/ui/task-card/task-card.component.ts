import { Component, inject, input } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';

import { AsPipe } from '@shared/pipes/as.pipe';
import { AssignedSeverityPipe } from '@shared/pipes/assigned-severity.pipe';
import { DueDatePipe } from '@shared/pipes/due-date.pipe';
import { ElapsedDaysPipe } from '@shared/pipes/elapsed-days.pipe';
import { EstimatesPipe } from '@shared/pipes/estimates.pipe';
import { ReplaceUnderscorePipe } from '@shared/pipes/replace-underscore.pipe';
import { Severities } from '@shared/types/severities.type';
import { TaskResponse } from '@shared/models/api-response.model';
import { AddTaskComponent } from '@ui/add-task/add-task.component';
import { AvatarComponent } from '@ui/avatar/avatar.component';
import { ConfirmationModalComponent } from '@ui/confirmation-modal/confirmation-modal.component';
import { TagComponent } from '@ui/tag/tag.component';


@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [
    AsPipe,
    AssignedSeverityPipe,
    AvatarComponent,
    DueDatePipe,
    ElapsedDaysPipe,
    EstimatesPipe,
    MatMenuModule,
    ReplaceUnderscorePipe,
    TagComponent,
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  private readonly modalService = inject(MatDialog);
  readonly severities!: Severities;

  task = input.required<TaskResponse>();

  editTask(): void {
    this.modalService.open(AddTaskComponent, {
      width: '624px',
      height: '224px',
      disableClose: true,
      data: this.task(),
    });
  }

  deleteTask(): void {
    this.modalService.open(ConfirmationModalComponent, {
      width: '360px',
      height: '200px',
      data: {
        message: 'Are you sure you want to remove this task? This action cannot be undone.',
      },
    });
  }
}
