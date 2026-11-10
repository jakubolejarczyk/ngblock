import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonBaseComponent } from '../../../../dumb/control/button/button-base/button-base.control';
import type { InputValue, OutputValue } from '../../../smart-component.types';

@Component({
  selector: 'ngb-button-base-control-smart',
  imports: [ButtonBaseComponent],
  template: `<ngb-button-base-control [type]="type()" [disabled]="disabled()" [ariaLabel]="ariaLabel()" (clicked)="onClicked($event)"><ng-content /></ngb-button-base-control>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonBaseSmartComponent {
  readonly type = input<InputValue<ButtonBaseComponent['type']>>('button');
  readonly disabled = input<InputValue<ButtonBaseComponent['disabled']>>(false);
  readonly ariaLabel = input<InputValue<ButtonBaseComponent['ariaLabel']>>(null);
  readonly clicked = output<OutputValue<ButtonBaseComponent['clicked']>>();

  onClicked(value: OutputValue<ButtonBaseComponent['clicked']>): void {
    this.clicked.emit(value);
  }
}
