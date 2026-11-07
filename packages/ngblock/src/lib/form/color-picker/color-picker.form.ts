import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-color-picker-form',
  templateUrl: './color-picker.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerFormComponent {
  readonly label = input.required<string>();
  readonly value = input('#3b82f6');
  readonly changed = output<string>();

  onInput(event: Event): void {
    this.changed.emit((event.target as HTMLInputElement).value);
  }
}
