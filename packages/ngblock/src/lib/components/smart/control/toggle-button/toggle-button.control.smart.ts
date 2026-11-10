import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { ToggleButtonComponent } from '../../../dumb/control/toggle-button/toggle-button.control';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-toggle-button-control-smart',
  imports: [ToggleButtonComponent],
  template: `<ngb-toggle-button-control [pressed]="pressed()" [disabled]="disabled()" (changed)="onChanged($event)"><ng-content /></ngb-toggle-button-control>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleButtonSmartComponent {
  readonly pressed = model<InputValue<ToggleButtonComponent['pressed']>>(false);
  readonly disabled = input<InputValue<ToggleButtonComponent['disabled']>>(false);
  readonly changed = output<OutputValue<ToggleButtonComponent['changed']>>();

  onChanged(value: OutputValue<ToggleButtonComponent['changed']>): void {
    this.pressed.set(value);
    this.changed.emit(value);
  }
}
