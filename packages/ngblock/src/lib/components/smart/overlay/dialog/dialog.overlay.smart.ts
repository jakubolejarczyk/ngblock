import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { DialogOverlayComponent } from '../../../dumb/overlay/dialog/dialog.overlay';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-dialog-overlay-smart',
  imports: [DialogOverlayComponent],
  template: `<ngb-dialog-overlay [open]="open()" [title]="title()" (closed)="onClosed($event)"><ng-content /></ngb-dialog-overlay>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogOverlaySmartComponent {
  readonly open = model<InputValue<DialogOverlayComponent['open']>>(false);
  readonly title = input.required<InputValue<DialogOverlayComponent['title']>>();
  readonly closed = output<OutputValue<DialogOverlayComponent['closed']>>();

  onClosed(value: OutputValue<DialogOverlayComponent['closed']>): void {
    this.open.set(false);
    this.closed.emit(value);
  }
}
