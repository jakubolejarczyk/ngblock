import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-date-picker-form',
  templateUrl: './date-picker.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerFormComponent {
  readonly label = input.required<string>();
  readonly value = input('');
  readonly min = input('');
  readonly max = input('');
  readonly disabled = input(false);
  readonly changed = output<string>();

  onChange(event: Event): void {
    this.changed.emit((event.target as HTMLInputElement).value);
  }
}
