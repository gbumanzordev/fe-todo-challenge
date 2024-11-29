import { Component, input } from '@angular/core';

import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskResponse } from '../../shared/models/api-response.model';
import { ReplaceUnderscorePipe } from '../../shared/pipes/replace-underscore.pipe';

@Component({
  selector: 'app-dashboard-lane',
  standalone: true,
  imports: [TaskCardComponent, ReplaceUnderscorePipe],
  templateUrl: './dashboard-lane.component.html',
  styleUrl: './dashboard-lane.component.scss',
})
export class DashboardLaneComponent {
  data = input.required<TaskResponse[]>();
  title = input.required<string>();
}
