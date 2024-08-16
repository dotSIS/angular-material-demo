import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routerProviders } from './app/app.routes';
import { provideAnimations, BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [routerProviders, provideAnimations(), BrowserAnimationsModule],
}).catch(err => console.error(err));
