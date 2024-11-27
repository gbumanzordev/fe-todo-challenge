import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
})
export class TagComponent {
  severity = input<string>('default');
  displayControl = input<boolean>(false);

  control = new FormControl();
}
