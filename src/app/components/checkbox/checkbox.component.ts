import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox'; // Import MatCheckboxModule
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [MatCheckboxModule, FormsModule, CommonModule], // Add FormsModule here
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  checked = false;
  indeterminate = false;
}
