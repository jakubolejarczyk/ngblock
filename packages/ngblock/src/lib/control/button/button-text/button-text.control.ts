import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-button-text-control',
  imports: [],
  templateUrl: './button-text.control.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonTextComponent {
  readonly type = input<HTMLButtonElement['type']>('button');
  readonly disabled = input(false);
}
