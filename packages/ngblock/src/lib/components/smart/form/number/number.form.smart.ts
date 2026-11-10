import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { NumberFormComponent } from '../../../dumb/form/number/number.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-number-form-smart',
  imports: [NumberFormComponent],
  template: `<ngb-number-form [label]="label()" [value]="value()" [min]="min()" [max]="max()" [step]="step()" [disabled]="disabled()" (changed)="onChanged($event)"><ng-content /></ngb-number-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberFormSmartComponent {
  readonly label = input.required<InputValue<NumberFormComponent['label']>>();
  readonly value = model<InputValue<NumberFormComponent['value']>>(null);
  readonly min = input<InputValue<NumberFormComponent['min']>>(null);
  readonly max = input<InputValue<NumberFormComponent['max']>>(null);
  readonly step = input<InputValue<NumberFormComponent['step']>>(1);
  readonly disabled = input<InputValue<NumberFormComponent['disabled']>>(false);
  readonly changed = output<OutputValue<NumberFormComponent['changed']>>();

  onChanged(value: OutputValue<NumberFormComponent['changed']>): void {
    this.value.set(value);
    this.changed.emit(value);
  }
}
