import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-dialog-overlay',
  templateUrl: './dialog.overlay.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogOverlayComponent {
  readonly open = input(false);
  readonly title = input.required<string>();
  readonly closed = output<void>();

  close(): void {
    this.closed.emit();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open()) {
      this.close();
    }
  }
}
