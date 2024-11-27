import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  size = input.required<'sm' | 'md' | 'lg'>();
  imageUrl = input.required<string>();
}
