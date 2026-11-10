import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { ConfirmDialogOverlayComponent } from '../../../dumb/overlay/confirm-dialog/confirm-dialog.overlay';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-confirm-dialog-overlay-smart',
  imports: [ConfirmDialogOverlayComponent],
  template: `<ngb-confirm-dialog-overlay [open]="open()" [title]="title()" [message]="message()" [confirmLabel]="confirmLabel()" [cancelLabel]="cancelLabel()" (confirmed)="onConfirmed($event)" (cancelled)="onCancelled($event)"><ng-content /></ngb-confirm-dialog-overlay>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogOverlaySmartComponent {
  readonly open = model<InputValue<ConfirmDialogOverlayComponent['open']>>(false);
  readonly title = input.required<InputValue<ConfirmDialogOverlayComponent['title']>>();
  readonly message = input.required<InputValue<ConfirmDialogOverlayComponent['message']>>();
  readonly confirmLabel = input<InputValue<ConfirmDialogOverlayComponent['confirmLabel']>>('Confirm');
  readonly cancelLabel = input<InputValue<ConfirmDialogOverlayComponent['cancelLabel']>>('Cancel');
  readonly confirmed = output<OutputValue<ConfirmDialogOverlayComponent['confirmed']>>();
  readonly cancelled = output<OutputValue<ConfirmDialogOverlayComponent['cancelled']>>();

  onConfirmed(value: OutputValue<ConfirmDialogOverlayComponent['confirmed']>): void {
    this.open.set(false);
    this.confirmed.emit(value);
  }

  onCancelled(value: OutputValue<ConfirmDialogOverlayComponent['cancelled']>): void {
    this.open.set(false);
    this.cancelled.emit(value);
  }
}
