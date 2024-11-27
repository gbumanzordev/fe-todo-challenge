import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AvatarComponent } from './ui/avatar/avatar.component';
import { TagComponent } from './ui/tag/tag.component';
import { FormControl } from '@angular/forms';
import { NavBarComponent } from './ui/nav-bar/nav-bar.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AvatarComponent, TagComponent, NavBarComponent, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
