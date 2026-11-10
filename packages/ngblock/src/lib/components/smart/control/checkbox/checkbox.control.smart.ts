import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { CheckboxComponent } from '../../../dumb/control/checkbox/checkbox.control';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-checkbox-control-smart',
  imports: [CheckboxComponent],
  template: `<ngb-checkbox-control [checked]="checked()" [disabled]="disabled()" (changed)="onChanged($event)"><ng-content /></ngb-checkbox-control>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxSmartComponent {
  readonly checked = model<InputValue<CheckboxComponent['checked']>>(false);
  readonly disabled = input<InputValue<CheckboxComponent['disabled']>>(false);
  readonly changed = output<OutputValue<CheckboxComponent['changed']>>();

  onChanged(value: OutputValue<CheckboxComponent['changed']>): void {
    this.checked.set(value);
    this.changed.emit(value);
  }
}
