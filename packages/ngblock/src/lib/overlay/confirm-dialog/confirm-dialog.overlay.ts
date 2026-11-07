import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'ngb-confirm-dialog-overlay',
  templateUrl: './confirm-dialog.overlay.html',
  styleUrl: '../dialog/dialog.overlay.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogOverlayComponent {
  readonly open = input(false);
  readonly title = input.required<string>();
  readonly message = input.required<string>();
  readonly confirmLabel = input('Confirm');
  readonly cancelLabel = input('Cancel');
  readonly confirmed = output<void>();
  readonly cancelled = output<void>();
}
