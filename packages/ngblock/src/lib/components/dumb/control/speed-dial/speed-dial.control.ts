import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

export interface SpeedDialAction {
  readonly label: string;
  readonly value: string;
}

@Component({
  selector: 'ngb-speed-dial-control',
  templateUrl: './speed-dial.control.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeedDialComponent {
  readonly label = input('Quick actions');
  readonly actions = input.required<readonly SpeedDialAction[]>();
  readonly open = input(false);
  readonly openChange = output<boolean>();
  readonly selected = output<SpeedDialAction>();
}
