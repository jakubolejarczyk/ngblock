import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-checkbox-control',
  templateUrl: './checkbox.control.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  readonly checked = input(false);
  readonly disabled = input(false);
  readonly changed = output<boolean>();

  onChange(event: Event): void {
    this.changed.emit((event.target as HTMLInputElement).checked);
  }
}
