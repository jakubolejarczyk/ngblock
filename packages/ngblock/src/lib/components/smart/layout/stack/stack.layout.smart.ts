import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { StackLayoutComponent } from '../../../dumb/layout/stack/stack.layout';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-stack-layout-smart',
  imports: [StackLayoutComponent],
  template: `<ngb-stack-layout [direction]="direction()" [gap]="gap()"><ng-content /></ngb-stack-layout>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackLayoutSmartComponent {
  readonly direction = input<InputValue<StackLayoutComponent['direction']>>('vertical');
  readonly gap = input<InputValue<StackLayoutComponent['gap']>>('1rem');
}
