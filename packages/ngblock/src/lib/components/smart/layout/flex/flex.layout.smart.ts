import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FlexLayoutComponent } from '../../../dumb/layout/flex/flex.layout';
import type { InputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-flex-layout-smart',
  imports: [FlexLayoutComponent],
  template: `<ngb-flex-layout [direction]="direction()" [wrap]="wrap()" [justify]="justify()" [align]="align()" [gap]="gap()"><ng-content /></ngb-flex-layout>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexLayoutSmartComponent {
  readonly direction =
    input<InputValue<FlexLayoutComponent['direction']>>('row');
  readonly wrap = input<InputValue<FlexLayoutComponent['wrap']>>('wrap');
  readonly justify = input<InputValue<FlexLayoutComponent['justify']>>('start');
  readonly align = input<InputValue<FlexLayoutComponent['align']>>('center');
  readonly gap = input<InputValue<FlexLayoutComponent['gap']>>('1rem');
}
