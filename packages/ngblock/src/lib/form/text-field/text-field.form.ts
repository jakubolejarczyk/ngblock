import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-text-field-form',
  templateUrl: './text-field.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldFormComponent {
  readonly label = input.required<string>();
  readonly value = input('');
  readonly type = input<HTMLInputElement['type']>('text');
  readonly placeholder = input('');
  readonly disabled = input(false);
  readonly required = input(false);
  readonly changed = output<string>();

  onInput(event: Event): void {
    this.changed.emit((event.target as HTMLInputElement).value);
  }
}
