import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-toggle-button-control',
  templateUrl: './toggle-button.control.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleButtonComponent {
  readonly pressed = input(false);
  readonly disabled = input(false);
  readonly changed = output<boolean>();
}
