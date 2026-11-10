import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProgressMessageComponent } from '../../../dumb/message/progress/progress.message';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-progress-message-smart',
  imports: [ProgressMessageComponent],
  template: `<ngb-progress-message [value]="value()" [max]="max()" [label]="label()"><ng-content /></ngb-progress-message>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressMessageSmartComponent {
  readonly value = input<InputValue<ProgressMessageComponent['value']>>(0);
  readonly max = input<InputValue<ProgressMessageComponent['max']>>(100);
  readonly label = input<InputValue<ProgressMessageComponent['label']>>('Progress');
}
