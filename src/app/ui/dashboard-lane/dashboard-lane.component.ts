import { Component, input } from '@angular/core';

import { TaskResponse } from '@shared/models/api-response.model';
import { ReplaceUnderscorePipe } from '@shared/pipes/replace-underscore.pipe';
import { TaskCardComponent } from '@ui/task-card/task-card.component';

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
