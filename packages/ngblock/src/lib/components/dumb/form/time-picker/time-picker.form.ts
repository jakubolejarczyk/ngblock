import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-time-picker-form',
  templateUrl: './time-picker.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimePickerFormComponent {
  readonly label = input.required<string>();
  readonly value = input('');
  readonly min = input('');
  readonly max = input('');
  readonly step = input(60);
  readonly disabled = input(false);
  readonly changed = output<string>();

  onChange(event: Event): void {
    this.changed.emit((event.target as HTMLInputElement).value);
  }
}
