import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-drawer-overlay',
  templateUrl: './drawer.overlay.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerOverlayComponent {
  readonly open = input(false);
  readonly title = input.required<string>();
  readonly side = input<'left' | 'right'>('right');
  readonly closed = output<void>();

  close(): void {
    this.closed.emit();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open()) this.close();
  }
}
