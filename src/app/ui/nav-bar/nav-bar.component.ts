import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { AvatarComponent } from '@ui/avatar/avatar.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [AvatarComponent, ReactiveFormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  searchControl = new FormControl('');
}
