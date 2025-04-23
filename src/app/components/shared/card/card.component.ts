import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
})

export class CardComponent {
  @Input() class: string = '';
  @Input() hover: boolean = false;
  @Input() onClick?: () => void;

  handleClick() {
    if (this.onClick) {
      this.onClick();
    }
  }
}
