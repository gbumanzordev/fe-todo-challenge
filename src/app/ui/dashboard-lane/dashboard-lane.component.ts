import { Component, input } from '@angular/core';
import { Task } from '../../models/task.model';
import { LaneCardComponent } from '../lane-card/lane-card.component';

@Component({
  selector: 'app-dashboard-lane',
  standalone: true,
  imports: [LaneCardComponent],
  templateUrl: './dashboard-lane.component.html',
  styleUrl: './dashboard-lane.component.scss',
})
export class DashboardLaneComponent {
  title = input.required<string>();
  data = input.required<Task[]>();
}
