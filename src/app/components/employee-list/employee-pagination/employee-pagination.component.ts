import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectComponent } from "../../shared/select/select.component";

@Component({
  selector: 'app-employee-pagination',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './employee-pagination.component.html',
})
export class EmployeePaginationComponent {

  @Input() currentPage = 1;
  @Input() itemsPerPage = 5;
  @Input() totalPages = 1;

  @Output() onChangePage = new EventEmitter<number>()
  @Output() onItemsPerPageChange = new EventEmitter<void>()

  get paginationOptions() {
    return [5, 15, 25, 50, 100].map(n => ({ value: n, label: `${n} per page` }));
  }
}
