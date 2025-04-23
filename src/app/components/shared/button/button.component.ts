import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

type ButtonVariant = 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'default';
  @Input() size: ButtonSize = 'md';
  @Input() isLoading = false;
  @Input() icon?: LucideIconData;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() fullWidth = false;
  @Input() disabled = false;
  @Input() class = '';

  get classes(): string[] {
    const variantStyles: Record<ButtonVariant, string> = {
      default: 'shadow-sm bg-transparent hover:bg-gray-300 text-black',
      primary: 'shadow-sm bg-blue-600 hover:bg-blue-700 text-white',
      secondary: 'shadow-sm bg-indigo-600 hover:bg-indigo-700 text-white',
      accent: 'shadow-sm bg-cyan-600 hover:bg-cyan-700 text-white',
      success: 'shadow-sm bg-green-600 hover:bg-green-700 text-white',
      warning: 'shadow-sm bg-orange-600 hover:bg-orange-700 text-white',
      error: 'shadow-sm bg-red-600 hover:bg-red-700 text-white',
      ghost: 'bg-transparent border-none outline-none text-gray-700',
    };

    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'text-xs px-2 py-1',
      md: 'text-sm px-4 py-2',
      lg: 'text-base px-6 py-3',
    };

    return [
      'cursor-pointer inline-flex items-center justify-center rounded-md font-medium',
      'focus:outline-none',
      'transition-colors duration-200 ease-in-out',
      variantStyles[this.variant],
      sizeStyles[this.size],
      this.fullWidth ? 'w-full' : '',
      (this.disabled || this.isLoading) ? 'opacity-60 cursor-not-allowed' : '',
      this.class
    ];
  }
}
