import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { DatePickerFormComponent } from '../../../dumb/form/date-picker/date-picker.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-date-picker-form-smart',
  imports: [DatePickerFormComponent],
  template: `<ngb-date-picker-form [label]="label()" [value]="value()" [min]="min()" [max]="max()" [disabled]="disabled()" (changed)="onChanged($event)"><ng-content /></ngb-date-picker-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerFormSmartComponent {
  readonly label = input.required<InputValue<DatePickerFormComponent['label']>>();
  readonly value = model<InputValue<DatePickerFormComponent['value']>>('');
  readonly min = input<InputValue<DatePickerFormComponent['min']>>('');
  readonly max = input<InputValue<DatePickerFormComponent['max']>>('');
  readonly disabled = input<InputValue<DatePickerFormComponent['disabled']>>(false);
  readonly changed = output<OutputValue<DatePickerFormComponent['changed']>>();

  onChanged(value: OutputValue<DatePickerFormComponent['changed']>): void {
    this.value.set(value);
    this.changed.emit(value);
  }
}
