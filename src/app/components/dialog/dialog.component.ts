import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogContentComponent, {
      width: '250px',
      data: { message: 'This is a dialog message!' }
    });
  }
}
