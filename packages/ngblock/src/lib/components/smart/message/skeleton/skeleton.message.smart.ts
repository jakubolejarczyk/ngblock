import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SkeletonMessageComponent } from '../../../dumb/message/skeleton/skeleton.message';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-skeleton-message-smart',
  imports: [SkeletonMessageComponent],
  template: `<ngb-skeleton-message [lines]="lines()"><ng-content /></ngb-skeleton-message>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonMessageSmartComponent {
  readonly lines = input<InputValue<SkeletonMessageComponent['lines']>>(3);
}
