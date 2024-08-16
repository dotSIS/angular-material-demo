import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [MatToolbarModule, MatSidenavModule, MatButtonModule, RouterModule, CommonModule],
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {}
