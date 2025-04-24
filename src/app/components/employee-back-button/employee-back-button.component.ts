import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, MoveLeft } from 'lucide-angular';

@Component({
  selector: 'app-employee-back-button',
  standalone: true,
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './employee-back-button.component.html'
})
export class EmployeeBackButtonComponent {
  readonly BackIcon = MoveLeft

  @Input() text = ''
}
