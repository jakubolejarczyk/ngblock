import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PopoverOverlayComponent } from '../../../dumb/overlay/popover/popover.overlay';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-popover-overlay-smart',
  imports: [PopoverOverlayComponent],
  template: `<ngb-popover-overlay [label]="label()"><ng-content /></ngb-popover-overlay>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverOverlaySmartComponent {
  readonly label = input<InputValue<PopoverOverlayComponent['label']>>('More information');
}
