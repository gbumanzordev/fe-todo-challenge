import { Component, output } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  standalone: true,
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss',
})
export class ButtonToggleComponent {
  toggle = output<number>();
  selected = 0;

  isSelected(index: number): boolean {
    return this.selected === index;
  }

  select(index: number): void {
    this.selected = index;
  }
}
