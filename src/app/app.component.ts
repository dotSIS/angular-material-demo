import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component'; // Import the HomeComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomeComponent],
  providers: [provideAnimations()],
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
