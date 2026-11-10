import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'ngb-popover-overlay',
  templateUrl: './popover.overlay.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverOverlayComponent {
  readonly label = input('More information');
  readonly open = signal(false);

  toggle(): void {
    this.open.update((value) => !value);
  }

  close(): void {
    this.open.set(false);
  }
}
