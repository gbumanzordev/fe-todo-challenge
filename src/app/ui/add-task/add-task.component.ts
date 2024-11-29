import { Component, inject, OnInit } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { MatSelectModule } from '@angular/material/select';
import { POINT_ESTIMATES } from '../../shared/utils/point-estimates';
import { KeyValuePipe, LowerCasePipe } from '@angular/common';
import { EstimatesPipe } from '../../shared/pipes/estimates.pipe';
import { AsPipe } from '../../shared/pipes/as.pipe';
import { PointEstimate } from '../../shared/models/types';
import { AvatarComponent } from '../avatar/avatar.component';
import { ASSIGNED_SEVERITIES } from '../../shared/utils/assigned-severities';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ReplaceUnderscorePipe } from '../../shared/pipes/replace-underscore.pipe';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    TagComponent,
    MatSelectModule,
    KeyValuePipe,
    LowerCasePipe,
    EstimatesPipe,
    AsPipe,
    AvatarComponent,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ReplaceUnderscorePipe,
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent implements OnInit {
  protected readonly dialogRef: MatDialogRef<unknown> = inject(MatDialogRef);
  protected readonly POINT_ESTIMATES = POINT_ESTIMATES;

  pointEstimates!: PointEstimate;
  protected readonly ASSIGNED_SEVERITIES = ASSIGNED_SEVERITIES;
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      estimate: new FormControl(),
      assignee: new FormControl(),
      label: new FormControl(),
      dueDate: new FormControl(),
    });
  }

  closeModal(save = false): void {
    if (save) {
      // TODO: Implement
    }

    this.dialogRef.close();
  }
}
