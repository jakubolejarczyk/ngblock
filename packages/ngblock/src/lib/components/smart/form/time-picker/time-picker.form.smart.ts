import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
  output,
} from '@angular/core';
import { TimePickerFormComponent } from '../../../dumb/form/time-picker/time-picker.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-time-picker-form-smart',
  imports: [TimePickerFormComponent],
  template: `<ngb-time-picker-form [label]="label()" [value]="value()" [min]="min()" [max]="max()" [step]="step()" [disabled]="disabled()" (changed)="onChanged($event)" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimePickerFormSmartComponent {
  readonly label = input.required<InputValue<TimePickerFormComponent['label']>>();
  readonly value = model<InputValue<TimePickerFormComponent['value']>>('');
  readonly min = input<InputValue<TimePickerFormComponent['min']>>('');
  readonly max = input<InputValue<TimePickerFormComponent['max']>>('');
  readonly step = input<InputValue<TimePickerFormComponent['step']>>(60);
  readonly disabled =
    input<InputValue<TimePickerFormComponent['disabled']>>(false);
  readonly changed =
    output<OutputValue<TimePickerFormComponent['changed']>>();

  onChanged(value: OutputValue<TimePickerFormComponent['changed']>): void {
    this.value.set(value);
    this.changed.emit(value);
  }
}
