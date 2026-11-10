import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-textarea-form',
  templateUrl: './textarea.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaFormComponent {
  readonly label = input.required<string>();
  readonly value = input('');
  readonly rows = input(4);
  readonly placeholder = input('');
  readonly disabled = input(false);
  readonly required = input(false);
  readonly changed = output<string>();

  onInput(event: Event): void {
    this.changed.emit((event.target as HTMLTextAreaElement).value);
  }
}
