import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { BuildingIcon, Calendar1Icon, DollarSignIcon, LucideAngularModule, MailIcon, MoveLeft } from 'lucide-angular';
import { statusVariant } from '../../utils/get-status';
import { EmployeeDeleteComponent } from '../employee-delete/employee-delete.component';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, LucideAngularModule, EmployeeDeleteComponent],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})


export class EmployeeDetailComponent implements OnInit {
  readonly BackIcon = MoveLeft
  readonly MailIcon = MailIcon
  readonly BuildingIcon = BuildingIcon
  readonly CalendarIcon = Calendar1Icon
  readonly DollarSignIcon = DollarSignIcon

  private employeeService = inject(EmployeeService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  @ViewChild(EmployeeDeleteComponent) deleteModal!: EmployeeDeleteComponent;

  statusVariant = statusVariant;
  employee: Employee | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.employee = this.employeeService.getEmployeeById(id);

      // If employee not found, could redirect back to list
      if (!this.employee) {
        // No need to redirect, we'll show a not found message
      }
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  calculateEmploymentLength(hireDate: string): string {
    const hired = new Date(hireDate);
    const now = new Date();

    const yearDiff = now.getFullYear() - hired.getFullYear();
    const monthDiff = now.getMonth() - hired.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < hired.getDate())) {
      return `${yearDiff - 1} years, ${monthDiff + 12} months`;
    }

    if (yearDiff === 0) {
      return `${monthDiff} months`;
    }

    return `${yearDiff} years, ${monthDiff} months`;
  }

  openDeleteModal() {
    this.deleteModal.open();
  }

  deleteEmployee(id: number): void {
    if (!this.employee) return;

    this.employeeService.deleteEmployee(id);
    this.router.navigate(['/employees']);
  }
}
