import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-header',
  standalone: true,
  templateUrl: './employee-header.component.html'
})
export class EmployeeHeaderComponent {
  @Input() header = ''
}
