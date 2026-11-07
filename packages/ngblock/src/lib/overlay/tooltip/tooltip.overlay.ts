import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'ngb-tooltip-overlay',
  templateUrl: './tooltip.overlay.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipOverlayComponent {
  readonly text = input.required<string>();
  readonly visible = signal(false);
}
