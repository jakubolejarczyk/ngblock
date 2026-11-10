import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SpinnerMessageComponent } from '../../../dumb/message/spinner/spinner.message';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-spinner-message-smart',
  imports: [SpinnerMessageComponent],
  template: `<ngb-spinner-message [label]="label()"><ng-content /></ngb-spinner-message>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerMessageSmartComponent {
  readonly label = input<InputValue<SpinnerMessageComponent['label']>>('Loading');
}
