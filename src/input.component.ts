import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlContainer,
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `<input type="text">`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  protected _value: any = '';
  protected _touched: boolean = false;
  protected _disabled: boolean = false;
  protected _onChange: any = () => {};
  protected _onTouch: any = () => {};

  @Input() type: string = 'text';
  @Input() label: string = '';

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    const controlValidators = this.controlContainer.control?.validator
      ? [this.controlContainer.control.validator]
      : [];
    const validators = controlValidators;

    // Access the validators here
    console.log(validators);
  }

  writeValue(value: any): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }

  onChange(value: any): void {
    if (!this._disabled) {
      this._onChange(value);
    }
  }

  onBlur(): void {
    if (!this._touched) {
      this._onTouch();
      this._touched = true;
    }
  }
}
