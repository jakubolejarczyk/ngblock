import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { ChipMessageComponent } from '../../../dumb/message/chip/chip.message';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-chip-message-smart',
  imports: [ChipMessageComponent],
  template: `@if (visible()) { <ngb-chip-message [label]="label()" [removable]="removable()" (removed)="onRemoved($event)"><ng-content /></ngb-chip-message> }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipMessageSmartComponent {
  readonly label = input.required<InputValue<ChipMessageComponent['label']>>();
  readonly removable = input<InputValue<ChipMessageComponent['removable']>>(false);
  readonly removed = output<OutputValue<ChipMessageComponent['removed']>>();
  readonly visible = signal(true);

  onRemoved(value: OutputValue<ChipMessageComponent['removed']>): void {
    this.visible.set(false);
    this.removed.emit(value);
  }
}
