import { ChangeDetectionStrategy, Component, input, linkedSignal, output } from '@angular/core';
import { StepsMenuComponent } from '../../../dumb/menu/steps/steps.menu';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-steps-menu-smart',
  imports: [StepsMenuComponent],
  template: `<ngb-steps-menu [steps]="steps()" [activeIndex]="currentActiveIndex()" (activeIndexChange)="onActiveIndexChange($event)"><ng-content /></ngb-steps-menu>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsMenuSmartComponent {
  readonly steps = input.required<InputValue<StepsMenuComponent['steps']>>();
  readonly activeIndex = input<InputValue<StepsMenuComponent['activeIndex']>>(0);
  readonly currentActiveIndex = linkedSignal(() => this.activeIndex());
  readonly activeIndexChange = output<OutputValue<StepsMenuComponent['activeIndexChange']>>();

  onActiveIndexChange(value: OutputValue<StepsMenuComponent['activeIndexChange']>): void {
    this.currentActiveIndex.set(value);
    this.activeIndexChange.emit(value);
  }
}
