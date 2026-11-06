import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-button-base-control',
  imports: [],
  templateUrl: './button-base.control.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonBaseComponent {
  readonly type = input<HTMLButtonElement['type']>('button');
  readonly disabled = input(false);
  readonly ariaLabel = input<string | null>(null);
  readonly clicked = output<MouseEvent>();

  onClick(event: MouseEvent): void {
    this.clicked.emit(event);
  }
}
