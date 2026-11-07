import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

export interface SelectOption {
  readonly label: string;
  readonly value: string;
}

@Component({
  selector: 'ngb-select-form',
  templateUrl: './select.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectFormComponent {
  readonly label = input.required<string>();
  readonly options = input.required<readonly SelectOption[]>();
  readonly value = input('');
  readonly disabled = input(false);
  readonly required = input(false);
  readonly changed = output<string>();

  onChange(event: Event): void {
    this.changed.emit((event.target as HTMLSelectElement).value);
  }
}
