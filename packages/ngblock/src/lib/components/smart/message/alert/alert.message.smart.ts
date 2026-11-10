import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AlertMessageComponent } from '../../../dumb/message/alert/alert.message';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-alert-message-smart',
  imports: [AlertMessageComponent],
  template: `<ngb-alert-message [type]="type()"><ng-content /></ngb-alert-message>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertMessageSmartComponent {
  readonly type = input<InputValue<AlertMessageComponent['type']>>('info');
}
