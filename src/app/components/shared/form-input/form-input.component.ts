import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css',
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true,
    },
  ],
})
export class FormInputComponent implements ControlValueAccessor, Validator {
  @Input() type: 'number' | 'date' | 'text' | 'email' | 'password' | 'select' = 'text';
  @Input() isTextarea = false;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() rows = 3;

  // For select
  @Input() options: any[] = [];
  @Input() optionLabel: string = 'label';
  @Input() optionValue: string = 'value';

  // Error
  @Input() errorMessage: string | null = null;

  value = '';
  isDisabled = false;

  onChange = (value: string) => { };
  onTouched = () => { };

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return control.valid ? null : { invalid: true };
  }
}
