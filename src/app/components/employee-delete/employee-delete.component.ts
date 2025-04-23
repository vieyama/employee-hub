import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { ButtonComponent } from "../shared/button/button.component";

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  imports: [CommonModule, ButtonComponent],
  standalone: true
})
export class EmployeeDeleteComponent {
  @Output() handleDelete = new EventEmitter<number>();
  @Output() handleCancel = new EventEmitter<void>();
  @Input() employee?: Employee | null

  visible = false;

  open() {
    this.visible = true;
  }

  close() {
    this.visible = false;
    this.handleCancel.emit()
  }

  confirm() {
    this.visible = false;
    if (this.employee) {
      this.handleDelete.emit(this.employee.id)
    }
  }
}
