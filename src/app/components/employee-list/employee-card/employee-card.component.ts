import { Component, Input, ViewChild } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { BodyComponent } from "../../shared/card/body/body.component";
import { BadgeComponent } from "../../shared/badge/badge.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { FooterComponent } from "../../shared/card/footer/footer.component";
import { Employee } from '../../../models/employee.model';
import { RouterLink } from '@angular/router';
import { CircleDollarSign, LucideAngularModule, MailIcon, MoreVerticalIcon } from 'lucide-angular';
import { statusVariant } from '../../../utils/get-status';
import { EmployeeDeleteComponent } from '../../employee-delete/employee-delete.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink, CardComponent, BodyComponent, BadgeComponent, ButtonComponent, FooterComponent],
  templateUrl: './employee-card.component.html',
})
export class EmployeeCardComponent {
  readonly MoreVerticalIcon = MoreVerticalIcon
  readonly MailIcon = MailIcon
  readonly CircleDollar = CircleDollarSign

  @Input()
  employee!: Employee;

  @ViewChild(EmployeeDeleteComponent) deleteModal!: EmployeeDeleteComponent;

  statusVariant = statusVariant;
  isOpenById: null | number = null;
  employeeToDelete: Employee | null = null;

  toggleDropdown(id: number) {
    this.isOpenById = this.isOpenById === id ? null : id;
  }

  closeDropdown() {
    this.isOpenById = null;
  }

  openDeleteModal(employee: Employee) {
    this.deleteModal.open();
    this.employeeToDelete = employee;
  }

  getFormattedStatus(status: string | undefined): string {
    if (!status) return '';
    return status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ');
  }
}
