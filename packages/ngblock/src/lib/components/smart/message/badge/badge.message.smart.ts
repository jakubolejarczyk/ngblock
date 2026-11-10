import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BadgeMessageComponent } from '../../../dumb/message/badge/badge.message';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-badge-message-smart',
  imports: [BadgeMessageComponent],
  template: `<ngb-badge-message [tone]="tone()"><ng-content /></ngb-badge-message>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeMessageSmartComponent {
  readonly tone = input<InputValue<BadgeMessageComponent['tone']>>('neutral');
}
