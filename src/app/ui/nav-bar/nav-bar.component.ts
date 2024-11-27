import { Component } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

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
