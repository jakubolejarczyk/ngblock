import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonTextComponent } from '../../../../dumb/control/button/button-text/button-text.control';
import type { InputValue, OutputValue } from '../../../smart-component.types';

@Component({
  selector: 'ngb-button-text-control-smart',
  imports: [ButtonTextComponent],
  template: `<ngb-button-text-control [type]="type()" [disabled]="disabled()" (clicked)="onClicked($event)"><ng-content /></ngb-button-text-control>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonTextSmartComponent {
  readonly type = input<InputValue<ButtonTextComponent['type']>>('button');
  readonly disabled = input<InputValue<ButtonTextComponent['disabled']>>(false);
  readonly clicked = output<OutputValue<ButtonTextComponent['clicked']>>();

  onClicked(value: OutputValue<ButtonTextComponent['clicked']>): void {
    this.clicked.emit(value);
  }
}
