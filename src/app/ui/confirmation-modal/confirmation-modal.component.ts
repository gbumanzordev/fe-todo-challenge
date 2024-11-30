import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss',
})
export class ConfirmationModalComponent {
  readonly dialogRef = inject(MatDialogRef);
  readonly dialogData = inject(DIALOG_DATA);

  closeModal(): void {
    this.dialogRef.close();
  }
}
