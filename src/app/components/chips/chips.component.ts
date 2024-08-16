import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips'; // Import MatChipsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [MatChipsModule, CommonModule], // Add MatChipsModule here
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {
  chipData = ['Angular', 'React', 'Vue', 'Svelte'];
}
