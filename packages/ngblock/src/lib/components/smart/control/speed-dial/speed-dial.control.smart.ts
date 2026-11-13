import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
  output,
} from '@angular/core';
import { SpeedDialComponent } from '../../../dumb/control/speed-dial/speed-dial.control';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-speed-dial-control-smart',
  imports: [SpeedDialComponent],
  template: `<ngb-speed-dial-control
    [label]="label()"
    [actions]="actions()"
    [open]="open()"
    (openChange)="open.set($event)"
    (selected)="onSelected($event)"
  />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeedDialSmartComponent {
  readonly label =
    input<InputValue<SpeedDialComponent['label']>>('Quick actions');
  readonly actions =
    input.required<InputValue<SpeedDialComponent['actions']>>();
  readonly open = model(false);
  readonly selected = output<OutputValue<SpeedDialComponent['selected']>>();

  onSelected(action: OutputValue<SpeedDialComponent['selected']>): void {
    this.open.set(false);
    this.selected.emit(action);
  }
}
