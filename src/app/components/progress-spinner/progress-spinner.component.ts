import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-progress-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent {
  progress = 40;

  increaseProgress() {
    if (this.progress < 100) {
      this.progress += 10;
    }
  }

  resetProgress() {
    this.progress = 0;
  }
}
