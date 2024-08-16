import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-content',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
