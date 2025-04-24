import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SelectComponent } from "../../shared/select/select.component";
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../shared/button/button.component";
import { BadgeComponent } from "../../shared/badge/badge.component";
import { LucideAngularModule, UserRoundPlus } from 'lucide-angular';
import { EmployeeService } from '../../../services/employee.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  imports: [CommonModule, FormsModule, SelectComponent, ButtonComponent, BadgeComponent, LucideAngularModule, RouterModule],
  standalone: true
})
export class EmployeeFilterComponent {
  readonly UserRoundPlus = UserRoundPlus
  protected employeeService = inject(EmployeeService);

  @Input() searchTerm = '';
  @Input() groupFilter = '';
  @Input() statusFilter = '';

  @Output() searchChange = new EventEmitter<string>();
  @Output() groupChange = new EventEmitter<string>();
  @Output() statusChange = new EventEmitter<string>();
  @Output() clear = new EventEmitter<string>();

  get getGroupOptions() {
    return [{ value: '', label: 'All Groups' }, ...this.employeeService.groups.map(item => ({ value: item.name, label: item.name }))]
  }

  get getStatusFilter() {
    return [
      { value: '', label: 'All Statuses' },
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' },
      { value: 'on-leave', label: 'On Leave' }
    ]
  }
}

