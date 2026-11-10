import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-chip-message',
  templateUrl: './chip.message.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipMessageComponent {
  readonly label = input.required<string>();
  readonly removable = input(false);
  readonly removed = output<void>();
}
