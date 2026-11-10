import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { SwitchFormComponent } from '../../../dumb/form/switch/switch.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-switch-form-smart',
  imports: [SwitchFormComponent],
  template: `<ngb-switch-form [label]="label()" [checked]="checked()" [disabled]="disabled()" (changed)="onChanged($event)"><ng-content /></ngb-switch-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchFormSmartComponent {
  readonly label = input.required<InputValue<SwitchFormComponent['label']>>();
  readonly checked = model<InputValue<SwitchFormComponent['checked']>>(false);
  readonly disabled = input<InputValue<SwitchFormComponent['disabled']>>(false);
  readonly changed = output<OutputValue<SwitchFormComponent['changed']>>();

  onChanged(value: OutputValue<SwitchFormComponent['changed']>): void {
    this.checked.set(value);
    this.changed.emit(value);
  }
}
