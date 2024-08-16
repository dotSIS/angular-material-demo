import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; // Import MatButtonToggleModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-toggle',
  standalone: true,
  imports: [MatButtonToggleModule, CommonModule], // Add MatButtonToggleModule here
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent {
  selectedValue: string = 'left';
}
