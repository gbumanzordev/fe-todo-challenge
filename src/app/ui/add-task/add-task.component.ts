import { Component, inject, OnInit } from '@angular/core';
import { KeyValuePipe, LowerCasePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { MatNativeDateModule } from '@angular/material/core';

import { AvatarComponent } from '../avatar/avatar.component';
import { ASSIGNED_SEVERITIES } from '@shared/utils/assigned-severities';
import { AsPipe } from '@shared/pipes/as.pipe';
import { EstimatesPipe } from '@shared/pipes/estimates.pipe';
import { POINT_ESTIMATES } from '@shared/utils/point-estimates';
import { PointEstimate } from '@shared/models/types';
import { ReplaceUnderscorePipe } from '@shared/pipes/replace-underscore.pipe';
import { TaskResponse } from '@shared/models/api-response.model';
import { TagComponent } from '../tag/tag.component';

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
  readonly dialogData: TaskResponse = inject(DIALOG_DATA);
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
      taskTitle: new FormControl(),
    });

    if (this.dialogData) {
      this.form.patchValue({
        estimate: this.dialogData.pointEstimate,
        assignee: this.dialogData.assignee,
        label: this.dialogData.tags,
        dueDate: this.dialogData.dueDate,
        taskTitle: this.dialogData.name,
      });
    }
  }

  closeModal(save = false): void {
    if (save) {
      this.dialogRef.close({ task: this.form.getRawValue() });
    }

    this.dialogRef.close();
  }
}
