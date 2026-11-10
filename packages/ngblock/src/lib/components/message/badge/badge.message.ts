import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-badge-message',
  templateUrl: './badge.message.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeMessageComponent {
  readonly tone = input<'neutral' | 'success' | 'warning' | 'danger'>(
    'neutral',
  );
}
