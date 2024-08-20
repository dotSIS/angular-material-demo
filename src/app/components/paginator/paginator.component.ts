import { Component } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent: PageEvent = {
    length: this.length,
    pageIndex: 0,
    pageSize: this.pageSize,
    previousPageIndex: 0
  };

  handlePageEvent(event: PageEvent) {
    this.pageEvent = event;
    // Handle page change logic here
  }
}
