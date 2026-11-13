import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-otp-form',
  templateUrl: './otp.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpFormComponent {
  readonly label = input.required<string>();
  readonly value = input('');
  readonly length = input(6);
  readonly disabled = input(false);
  readonly changed = output<string>();
  readonly normalizedLength = computed(() =>
    Math.max(1, Math.floor(this.length())),
  );

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value
      .replace(/\D/g, '')
      .slice(0, this.normalizedLength());
    inputElement.value = value;
    this.changed.emit(value);
  }
}
