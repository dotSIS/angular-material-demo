import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    CommonModule,
  ],
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent {
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia'
  ];
}
