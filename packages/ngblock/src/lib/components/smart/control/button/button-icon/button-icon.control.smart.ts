import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonIconComponent } from '../../../../dumb/control/button/button-icon/button-icon.control';
import type { InputValue, OutputValue } from '../../../smart-component.types';

@Component({
  selector: 'ngb-button-icon-control-smart',
  imports: [ButtonIconComponent],
  template: `<ngb-button-icon-control [type]="type()" [disabled]="disabled()" [icon]="icon()" [ariaLabel]="ariaLabel()" (clicked)="onClicked($event)"><ng-content /></ngb-button-icon-control>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonIconSmartComponent {
  readonly type = input<InputValue<ButtonIconComponent['type']>>('button');
  readonly disabled = input<InputValue<ButtonIconComponent['disabled']>>(false);
  readonly icon = input.required<InputValue<ButtonIconComponent['icon']>>();
  readonly ariaLabel = input.required<InputValue<ButtonIconComponent['ariaLabel']>>();
  readonly clicked = output<OutputValue<ButtonIconComponent['clicked']>>();

  onClicked(value: OutputValue<ButtonIconComponent['clicked']>): void {
    this.clicked.emit(value);
  }
}
