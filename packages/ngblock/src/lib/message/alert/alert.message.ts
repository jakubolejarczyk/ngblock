import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

export type AlertType = 'info' | 'success' | 'warning' | 'error';

@Component({
  selector: 'ngb-alert-message',
  templateUrl: './alert.message.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertMessageComponent {
  readonly type = input<AlertType>('info');
  readonly role = computed(() =>
    this.type() === 'warning' || this.type() === 'error' ? 'alert' : 'status',
  );
  readonly live = computed(() =>
    this.type() === 'error' ? 'assertive' : 'polite',
  );
}
