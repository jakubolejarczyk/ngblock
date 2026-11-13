import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-tags-form',
  templateUrl: './tags.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsFormComponent {
  readonly label = input.required<string>();
  readonly value = input<readonly string[]>([]);
  readonly placeholder = input('Add a value');
  readonly disabled = input(false);
  readonly changed = output<readonly string[]>();

  addValue(event: Event): void {
    event.preventDefault();
    const inputElement = event.target as HTMLInputElement;
    const next = inputElement.value.trim();
    if (!next || this.value().includes(next)) {
      inputElement.value = '';
      return;
    }

    this.changed.emit([...this.value(), next]);
    inputElement.value = '';
  }

  removeValue(value: string): void {
    this.changed.emit(this.value().filter((item) => item !== value));
  }
}
