import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-expansion-panel',
  standalone: true,
  imports: [MatExpansionModule, NgFor],
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent {
  panels = [
    { title: 'Panel 1', content: 'This is the content of Panel 1' },
    { title: 'Panel 2', content: 'This is the content of Panel 2' },
    { title: 'Panel 3', content: 'This is the content of Panel 3' },
  ];
}
