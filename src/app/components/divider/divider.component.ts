import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    RouterModule
  ],
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent {}
