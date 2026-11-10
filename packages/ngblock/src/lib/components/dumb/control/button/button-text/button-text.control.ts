import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { ButtonBaseComponent } from '../button-base/button-base.control';

@Component({
  selector: 'ngb-button-text-control',
  imports: [ButtonBaseComponent],
  templateUrl: './button-text.control.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonTextComponent {
  readonly type = input<HTMLButtonElement['type']>('button');
  readonly disabled = input(false);
  readonly clicked = output<MouseEvent>();
}
