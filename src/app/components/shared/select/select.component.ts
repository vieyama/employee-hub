import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() options: { value: string | number, label: string }[] = [];
  @Input() model: string | number = '';
  @Output() modelChange = new EventEmitter<string>();
  @Output() change = new EventEmitter<string>();

  onModelChange(value: string) {
    this.model = value;
    this.modelChange.emit(this.model);
    this.change.emit(value);
  }
}
