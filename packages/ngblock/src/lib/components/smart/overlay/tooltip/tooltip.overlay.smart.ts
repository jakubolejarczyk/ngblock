import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TooltipOverlayComponent } from '../../../dumb/overlay/tooltip/tooltip.overlay';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-tooltip-overlay-smart',
  imports: [TooltipOverlayComponent],
  template: `<ngb-tooltip-overlay [text]="text()"><ng-content /></ngb-tooltip-overlay>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipOverlaySmartComponent {
  readonly text = input.required<InputValue<TooltipOverlayComponent['text']>>();
}
