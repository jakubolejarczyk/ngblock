import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { SliderFormComponent } from '../../../dumb/form/slider/slider.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-slider-form-smart',
  imports: [SliderFormComponent],
  template: `<ngb-slider-form [label]="label()" [value]="value()" [min]="min()" [max]="max()" [step]="step()" (changed)="onChanged($event)"><ng-content /></ngb-slider-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderFormSmartComponent {
  readonly label = input.required<InputValue<SliderFormComponent['label']>>();
  readonly value = model<InputValue<SliderFormComponent['value']>>(50);
  readonly min = input<InputValue<SliderFormComponent['min']>>(0);
  readonly max = input<InputValue<SliderFormComponent['max']>>(100);
  readonly step = input<InputValue<SliderFormComponent['step']>>(1);
  readonly changed = output<OutputValue<SliderFormComponent['changed']>>();

  onChanged(value: OutputValue<SliderFormComponent['changed']>): void {
    this.value.set(value);
    this.changed.emit(value);
  }
}
