import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-button-text-control',
  imports: [],
  templateUrl: './button-text.control.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonTextComponent {
  readonly type = input<HTMLButtonElement['type']>('button');
  readonly disabled = input(false);
  readonly buttonClick = output<MouseEvent>();

  onClick(event: MouseEvent): void {
    this.buttonClick.emit(event);
  }
}
