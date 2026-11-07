import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-skeleton-message',
  templateUrl: './skeleton.message.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonMessageComponent {
  readonly lines = input(3);
}
