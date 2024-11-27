import { Component } from '@angular/core';
import { DashboardLaneComponent } from '../../ui/dashboard-lane/dashboard-lane.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardLaneComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
