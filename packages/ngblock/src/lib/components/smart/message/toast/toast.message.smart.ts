import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { ToastMessageComponent } from '../../../dumb/message/toast/toast.message';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-toast-message-smart',
  imports: [ToastMessageComponent],
  template: `@if (visible()) { <ngb-toast-message [title]="title()" [type]="type()" [dismissible]="dismissible()" (dismissed)="onDismissed($event)"><ng-content /></ngb-toast-message> }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastMessageSmartComponent {
  readonly title = input.required<InputValue<ToastMessageComponent['title']>>();
  readonly type = input<InputValue<ToastMessageComponent['type']>>('info');
  readonly dismissible = input<InputValue<ToastMessageComponent['dismissible']>>(true);
  readonly dismissed = output<OutputValue<ToastMessageComponent['dismissed']>>();
  readonly visible = signal(true);

  onDismissed(value: OutputValue<ToastMessageComponent['dismissed']>): void {
    this.visible.set(false);
    this.dismissed.emit(value);
  }
}
