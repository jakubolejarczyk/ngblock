import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonGroupComponent } from '../../../dumb/control/button-group/button-group.control';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-button-group-control-smart',
  imports: [ButtonGroupComponent],
  template: `<ngb-button-group-control [label]="label()"><ng-content /></ngb-button-group-control>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupSmartComponent {
  readonly label = input<InputValue<ButtonGroupComponent['label']>>('Actions');
}
