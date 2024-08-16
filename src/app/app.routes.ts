import { Route } from '@angular/router';
import { provideRouter } from '@angular/router';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { HomeComponent } from './components/home/home.component'; // Import the HomeComponent
import { BadgeComponent } from './components/badge/badge.component'; // Import the BadgeComponent
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component'; // Import the BottomSheetComponent
import { ButtonComponent } from './components/button/button.component'; // Import the ButtonComponent
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component'; // Import ButtonToggleComponent
import { CardComponent } from './components/card/card.component'; // Import CardComponent
import { CheckboxComponent } from './components/checkbox/checkbox.component'; // Import CheckboxComponent
import { ChipsComponent } from './components/chips/chips.component'; // Import ChipsComponent
import { CoreComponent } from './components/core/core.component'; // Import CoreComponent
import { DatepickerComponent } from './components/datepicker/datepicker.component'; // Import DatepickerComponent
import { DialogComponent } from './components/dialog/dialog.component'; // Import DialogComponent
import { DividerComponent } from './components/divider/divider.component'; // Import DividerComponent

export const routes: Route[] = [
  { path: '', component: HomeComponent }, // HomeComponent will display all links
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'bottom-sheet', component: BottomSheetComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'card', component: CardComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'core', component: CoreComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'divider', component: DividerComponent },
];

export const routerProviders = [
  provideRouter(routes)
];
