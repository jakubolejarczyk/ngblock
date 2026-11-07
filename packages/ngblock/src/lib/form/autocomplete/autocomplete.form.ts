import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-autocomplete-form',
  templateUrl: './autocomplete.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteFormComponent {
  readonly label = input.required<string>();
  readonly options = input.required<readonly string[]>();
  readonly value = input('');
  readonly placeholder = input('');
  readonly changed = output<string>();

  onInput(event: Event): void {
    this.changed.emit((event.target as HTMLInputElement).value);
  }
}
