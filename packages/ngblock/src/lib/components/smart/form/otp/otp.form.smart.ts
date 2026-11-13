import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
  output,
} from '@angular/core';
import { OtpFormComponent } from '../../../dumb/form/otp/otp.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-otp-form-smart',
  imports: [OtpFormComponent],
  template: `<ngb-otp-form
    [label]="label()"
    [value]="value()"
    [length]="length()"
    [disabled]="disabled()"
    (changed)="onChanged($event)"
  />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpFormSmartComponent {
  readonly label = input.required<InputValue<OtpFormComponent['label']>>();
  readonly value = model<InputValue<OtpFormComponent['value']>>('');
  readonly length = input<InputValue<OtpFormComponent['length']>>(6);
  readonly disabled = input<InputValue<OtpFormComponent['disabled']>>(false);
  readonly changed = output<OutputValue<OtpFormComponent['changed']>>();

  onChanged(value: OutputValue<OtpFormComponent['changed']>): void {
    this.value.set(value);
    this.changed.emit(value);
  }
}
