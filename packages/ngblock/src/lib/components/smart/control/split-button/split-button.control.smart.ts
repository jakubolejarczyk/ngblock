import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { SplitButtonComponent } from '../../../dumb/control/split-button/split-button.control';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-split-button-control-smart',
  imports: [SplitButtonComponent],
  template: `<ngb-split-button-control [label]="label()" [options]="options()" (action)="onAction($event)"><ng-content /></ngb-split-button-control>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitButtonSmartComponent {
  readonly label = input.required<InputValue<SplitButtonComponent['label']>>();
  readonly options = input.required<InputValue<SplitButtonComponent['options']>>();
  readonly action = output<OutputValue<SplitButtonComponent['action']>>();

  onAction(value: OutputValue<SplitButtonComponent['action']>): void {
    this.action.emit(value);
  }
}
