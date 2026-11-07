import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'ngb-password-form',
  templateUrl: './password.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordFormComponent {
  readonly label = input.required<string>();
  readonly value = input('');
  readonly placeholder = input('');
  readonly disabled = input(false);
  readonly changed = output<string>();
  readonly visible = signal(false);

  onInput(event: Event): void {
    this.changed.emit((event.target as HTMLInputElement).value);
  }
}
