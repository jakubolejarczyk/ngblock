import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-spinner-message',
  templateUrl: './spinner.message.html',
  styleUrl: './spinner.message.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerMessageComponent {
  readonly label = input('Loading');
}
