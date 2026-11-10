import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-switch-form',
  templateUrl: './switch.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchFormComponent {
  readonly label = input.required<string>();
  readonly checked = input(false);
  readonly disabled = input(false);
  readonly changed = output<boolean>();

  onChange(event: Event): void {
    this.changed.emit((event.target as HTMLInputElement).checked);
  }
}
