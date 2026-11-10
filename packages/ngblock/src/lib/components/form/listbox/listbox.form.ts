import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

export interface ListboxOption {
  readonly label: string;
  readonly value: string;
}

@Component({
  selector: 'ngb-listbox-form',
  templateUrl: './listbox.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListboxFormComponent {
  readonly label = input.required<string>();
  readonly options = input.required<readonly ListboxOption[]>();
  readonly value = input('');
  readonly changed = output<string>();

  onChange(event: Event): void {
    this.changed.emit((event.target as HTMLSelectElement).value);
  }
}
