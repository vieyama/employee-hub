import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { HeaderComponent } from '../shared/header/header.component';
import { Employee } from '../../models/employee.model';
import { LucideAngularModule } from 'lucide-angular';
import { EmployeeDeleteComponent } from '../employee-delete/employee-delete.component';
import { SelectComponent } from "../shared/select/select.component";
import { CardComponent } from "../shared/card/card.component";
import { EmployeeCardComponent } from "./employee-card/employee-card.component";
import { EmployeeFilterComponent } from "./employee-filter/employee-filter.component";
import { EmployeePaginationComponent } from "./employee-pagination/employee-pagination.component";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, LucideAngularModule, EmployeeDeleteComponent, SelectComponent, CardComponent, EmployeeCardComponent, EmployeeFilterComponent, EmployeePaginationComponent],
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent {
  protected employeeService = inject(EmployeeService);

  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  paginatedEmployees: Employee[] = [];
  searchTerm = '';
  groupFilter = '';
  statusFilter = '';
  sortBy = 'name';
  sortOrder: 'asc' | 'desc' = 'asc';
  employeeToDelete: Employee | null = null;
  currentPage = 1;
  itemsPerPage = 5;
  totalPages = 1;

  ngOnInit(): void {
    this.employees = this.employeeService.employees;
    this.applyFilters();
  }

  clearFilter(type: string) {
    switch (type) {
      case 'group':
        this.groupFilter = ''
        break

      case 'search':
        this.searchTerm = ''
        break

      case 'status':
        this.statusFilter = ''
        break

      default:
        this.searchTerm = ''
        this.groupFilter = ''
        this.statusFilter = ''
        break
    }
    this.applyFilters()
  }

  onSearchChange(value: string) {
    this.searchTerm = value;
    this.applyFilters();
  }

  onGroupChange(value: string) {
    this.groupFilter = value;
    this.applyFilters();
  }

  onStatusChange(value: string) {
    this.statusFilter = value;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredEmployees = this.employees.filter(employee => {
      const matchesSearch = !this.searchTerm ||
        employee.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        employee.position.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesDepartment = !this.groupFilter ||
        employee.group === this.groupFilter;

      const matchesStatus = !this.statusFilter ||
        employee.status === this.statusFilter;

      return matchesSearch && matchesDepartment && matchesStatus;
    });

    this.filteredEmployees.sort((a, b) => {
      let comparison = 0;

      switch (this.sortBy) {
        case 'name':
          comparison = `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`);
          break;
        case 'group':
          comparison = a.group.localeCompare(b.group);
          break;
        case 'status':
          comparison = a.status.localeCompare(b.status);
          break;
        case 'basicSalary':
          comparison = a.basicSalary - b.basicSalary;
          break;
      }

      return this.sortOrder === 'asc' ? comparison : -comparison;
    });

    this.totalPages = Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
    this.currentPage = 1;
    this.updatePaginatedEmployees();
  }

  updatePaginatedEmployees(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedEmployees = this.filteredEmployees.slice(startIndex, endIndex);
  }

  onItemsPerPageChange(): void {
    this.totalPages = Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
    this.currentPage = 1;
    this.updatePaginatedEmployees();
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedEmployees();
    }
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  cancelDelete(): void {
    this.employeeToDelete = null;
  }

  handleDelete(id: number): void {
    this.employeeService.deleteEmployee(id);
    this.employees = this.employeeService.employees;
    this.applyFilters();
    this.employeeToDelete = null;
  }

  get getSortingItems() {
    return [
      { value: 'name', label: 'Name' },
      { value: 'group', label: 'Group' },
      { value: 'basicSalary', label: 'Basic Salary' },
      { value: 'status', label: 'Status' }
    ]
  }


}
