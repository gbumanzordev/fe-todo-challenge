import { Component, input } from '@angular/core';

import { TagComponent } from '../tag/tag.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { EstimatesPipe } from '../../shared/pipes/estimates.pipe';
import { TaskResponse } from '../../shared/models/api-response.model';
import { DueDatePipe } from '../../shared/pipes/due-date.pipe';
import { ElapsedDaysPipe } from '../../shared/pipes/elapsed-days.pipe';
import { AssignedSeverityPipe } from '../../shared/pipes/assigned-severity.pipe';
import { ReplaceUnderscorePipe } from '../../shared/pipes/replace-underscore.pipe';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [
    TagComponent,
    AvatarComponent,
    EstimatesPipe,
    DueDatePipe,
    ElapsedDaysPipe,
    AssignedSeverityPipe,
    ReplaceUnderscorePipe,
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  task = input.required<TaskResponse>();
}
