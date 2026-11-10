import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-number-form',
  templateUrl: './number.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberFormComponent {
  readonly label = input.required<string>();
  readonly value = input<number | null>(null);
  readonly min = input<number | null>(null);
  readonly max = input<number | null>(null);
  readonly step = input(1);
  readonly disabled = input(false);
  readonly changed = output<number | null>();

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.changed.emit(value === '' ? null : Number(value));
  }
}
