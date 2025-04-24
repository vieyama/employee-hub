import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { HeaderComponent } from '../shared/header/header.component';
import { Employee, Group, Position } from '../../models/employee.model';
import { FormInputComponent } from '../shared/form-input/form-input.component';
import { ButtonComponent } from "../shared/button/button.component";
import { EmployeeHeaderComponent } from "../employee-header/employee-header.component";
import { EmployeeBackButtonComponent } from "../employee-back-button/employee-back-button.component";

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormInputComponent, RouterLink, ReactiveFormsModule, HeaderComponent, ButtonComponent, EmployeeHeaderComponent, EmployeeBackButtonComponent],
  templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private employeeService = inject(EmployeeService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  employeeForm!: FormGroup;
  isEditMode = false;
  employeeId?: number;
  loading = false;

  groups: Group[] = [];
  availablePositions: Position[] = [];
  status = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "on-leave", label: "On Leave" }
  ]

  ngOnInit(): void {
    this.initForm();
    this.loadGroups();

    // Check if we're in edit mode
    this.route.params.subscribe(params => {
      this.employeeId = params['id'] ? +params['id'] : undefined;

      if (this.employeeId) {
        this.isEditMode = true;
        this.loadEmployee(this.employeeId);
      }
    });
  }

  private initForm(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      description: ['', [Validators.required]],
      profileImage: ['', [Validators.required]],
      group: ['', [Validators.required]],
      position: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      basicSalary: [0, [Validators.required, Validators.min(0)]],
      status: ['active', [Validators.required]]
    });
  }

  private loadGroups(): void {
    this.groups = this.employeeService.groups;
  }

  private loadEmployee(id: number): void {
    const employee = this.employeeService.getEmployeeById(id);

    if (employee) {
      // Update available positions based on the employee's group
      this.updatePositionsForGroup(employee.group);

      // Set form values
      this.employeeForm.patchValue({
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        basicSalary: employee.basicSalary,
        description: employee.description || '',
        profileImage: employee.profileImage || '',
        group: employee.group,
        position: employee.position,
        birthDate: employee.birthDate,
        status: employee.status
      });
    } else {
      this.router.navigate(['/employees']);
    }
  }

  onGroupChange(): void {
    const group = this.employeeForm.get('group')?.value;

    if (group) {
      this.updatePositionsForGroup(group);
      // Reset position when group changes
      this.employeeForm.get('position')?.setValue('');
    } else {
      this.availablePositions = [];
    }
  }

  private updatePositionsForGroup(groupName: string): void {
    this.availablePositions = this.employeeService.getPositionsByGroup(groupName);
  }

  isFieldInvalid(field: string): boolean {
    const control = this.employeeForm.get(field);
    return !!control && control.touched && control.invalid;
  }

  onSubmit(): void {
    if (this.employeeForm.invalid) {
      // Mark all fields as touched to show validation errors
      Object.keys(this.employeeForm.controls).forEach(key => {
        this.employeeForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.loading = true;

    // Extract form values
    const formValues = this.employeeForm.value;

    setTimeout(() => {
      if (this.isEditMode && this.employeeId) {
        // Update existing employee
        const updatedEmployee: Employee = {
          id: this.employeeId,
          ...formValues
        };

        this.employeeService.updateEmployee(updatedEmployee);
      } else {
        // Add new employee
        this.employeeService.addEmployee(formValues);
      }

      this.loading = false;
      this.router.navigate(['/employees']);
    }, 800); // Simulate API delay
  }
}
