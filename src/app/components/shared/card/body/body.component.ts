import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html'
})
export class CardBodyComponent {
  @Input() class: string = '';
}
