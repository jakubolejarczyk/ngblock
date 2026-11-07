import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

export interface MultiSelectOption {
  readonly label: string;
  readonly value: string;
}

@Component({
  selector: 'ngb-multi-select-form',
  templateUrl: './multi-select.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiSelectFormComponent {
  readonly label = input.required<string>();
  readonly options = input.required<readonly MultiSelectOption[]>();
  readonly value = input<readonly string[]>([]);
  readonly disabled = input(false);
  readonly changed = output<readonly string[]>();

  onChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.changed.emit(
      Array.from(select.selectedOptions, (option) => option.value),
    );
  }
}
