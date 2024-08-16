import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, CommonModule], // Add MatCardModule here
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {}
