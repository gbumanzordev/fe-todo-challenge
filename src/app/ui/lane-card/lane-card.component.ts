import { Component } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-lane-card',
  standalone: true,
  imports: [TagComponent, AvatarComponent],
  templateUrl: './lane-card.component.html',
  styleUrl: './lane-card.component.scss',
})
export class LaneCardComponent {}
