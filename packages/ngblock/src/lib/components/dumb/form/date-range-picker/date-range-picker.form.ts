import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

export interface DateRangeValue {
  start: string;
  end: string;
}

@Component({
  selector: 'ngb-date-range-picker-form',
  templateUrl: './date-range-picker.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateRangePickerFormComponent {
  readonly label = input.required<string>();
  readonly start = input('');
  readonly end = input('');
  readonly min = input('');
  readonly max = input('');
  readonly disabled = input(false);
  readonly changed = output<DateRangeValue>();

  onChange(event: Event, field: keyof DateRangeValue): void {
    const value = (event.target as HTMLInputElement).value;
    this.changed.emit({
      start: field === 'start' ? value : this.start(),
      end: field === 'end' ? value : this.end(),
    });
  }
}
