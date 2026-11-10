import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-progress-message',
  templateUrl: './progress.message.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressMessageComponent {
  readonly value = input(0);
  readonly max = input(100);
  readonly label = input('Progress');
}
