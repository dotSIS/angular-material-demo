import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
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
