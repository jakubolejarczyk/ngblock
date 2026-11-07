import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

export type ToastType = 'info' | 'success' | 'warning' | 'error';

@Component({
  selector: 'ngb-toast-message',
  templateUrl: './toast.message.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastMessageComponent {
  readonly title = input.required<string>();
  readonly type = input<ToastType>('info');
  readonly dismissible = input(true);
  readonly dismissed = output<void>();
}
