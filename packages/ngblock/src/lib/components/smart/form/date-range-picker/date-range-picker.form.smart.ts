import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
  output,
} from '@angular/core';
import {
  DateRangePickerFormComponent,
  type DateRangeValue,
} from '../../../dumb/form/date-range-picker/date-range-picker.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-date-range-picker-form-smart',
  imports: [DateRangePickerFormComponent],
  template: `<ngb-date-range-picker-form [label]="label()" [start]="value().start" [end]="value().end" [min]="min()" [max]="max()" [disabled]="disabled()" (changed)="onChanged($event)" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateRangePickerFormSmartComponent {
  readonly label =
    input.required<InputValue<DateRangePickerFormComponent['label']>>();
  readonly value = model<DateRangeValue>({ start: '', end: '' });
  readonly min = input<InputValue<DateRangePickerFormComponent['min']>>('');
  readonly max = input<InputValue<DateRangePickerFormComponent['max']>>('');
  readonly disabled =
    input<InputValue<DateRangePickerFormComponent['disabled']>>(false);
  readonly changed =
    output<OutputValue<DateRangePickerFormComponent['changed']>>();

  onChanged(value: DateRangeValue): void {
    this.value.set(value);
    this.changed.emit(value);
  }
}
