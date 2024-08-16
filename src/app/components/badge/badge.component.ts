import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [MatBadgeModule, MatIconModule, CommonModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {}
