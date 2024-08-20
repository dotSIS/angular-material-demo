import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [MatRadioModule, FormsModule, RouterModule], // Add FormsModule here
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent {
  selectedValue: string = 'option1';

  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
}
