import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

export type BadgeVariant = 'success' | 'warning' | 'error' | 'default';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css'
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'default';
  @Input() idx: string = '';
  @Input() text = '';
  @Input() class = '';
  @Output() onRemove = new EventEmitter<string>();

  handleRemove() {
    if (this.onRemove) {
      this.onRemove.emit(this.idx)
    }
  }

  get classes(): string[] {
    const variantStyles: Record<BadgeVariant, string> = {
      default: 'bg-blue-100 text-blue-700',
      success: 'bg-emerald-100 text-emerald-700',
      warning: 'bg-amber-100 text-amber-700',
      error: 'bg-red-100 text-red-700',
    };

    return [
      'px-2.5 py-0.5 inline-flex items-center justify-center rounded-full',
      variantStyles[this.variant],
      this.class
    ];
  }

  get removeBtnClasses(): string[] {
    const variantStyles: Record<BadgeVariant, string> = {
      default: 'bg-blue-200 hover:bg-blue-300 text-blue-700',
      success: 'bg-emerald-200 hover:bg-emerald-300 text-emerald-700',
      warning: 'bg-amber-200 hover:bg-amber-300 text-amber-700',
      error: 'bg-red-200 hover:bg-red-300 text-red-700',
    };

    return [
      'ms-1.5 -me-1 inline-block rounded-full p-0.5 transition',
      variantStyles[this.variant]
    ];
  }
}
