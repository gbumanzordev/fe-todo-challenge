import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AvatarComponent } from '@ui/avatar/avatar.component';
import { MainLayoutComponent } from '@pages/main-layout/main-layout.component';
import { NavBarComponent } from '@ui/nav-bar/nav-bar.component';
import { TagComponent } from '@ui/tag/tag.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AvatarComponent, TagComponent, NavBarComponent, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
