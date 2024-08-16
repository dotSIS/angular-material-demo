import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [MatBottomSheetModule, MatButtonModule, CommonModule],
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetExampleSheet);
  }
}

@Component({
  selector: 'bottom-sheet-example-sheet',
  template: `
    <div class="bottom-sheet-content">
      <h3>Bottom Sheet Content</h3>
      <p>This is an example of a bottom sheet.</p>
      <button mat-button (click)="bottomSheetRef.dismiss()">Close</button>
    </div>
  `,
  styles: [`
    .bottom-sheet-content {
      padding: 20px;
      text-align: center;
    }
  `]
})
export class BottomSheetExampleSheet {
  constructor(public bottomSheetRef: MatBottomSheetRef<BottomSheetExampleSheet>) {}
}
