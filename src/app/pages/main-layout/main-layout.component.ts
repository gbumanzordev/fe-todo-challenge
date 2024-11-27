import { Component } from '@angular/core';
import { NavBarComponent } from '../../ui/nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../ui/sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NavBarComponent, RouterOutlet, SidebarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
