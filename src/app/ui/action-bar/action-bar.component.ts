import { Component, output } from '@angular/core';
import { ButtonToggleComponent } from '../button-toggle/button-toggle.component';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [ButtonToggleComponent],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.scss',
})
export class ActionBarComponent {
  actionClicked = output();
  toggle = output<number>();

  callToAction(): void {
    this.actionClicked.emit();
  }

  toggleClicked(index: number): void {
    this.toggle.emit(index);
  }
}
