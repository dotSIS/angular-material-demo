import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Import FormsModule here
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule, // Add FormsModule here
    CommonModule
  ],
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  selectedDate: Date | null = null;
}
