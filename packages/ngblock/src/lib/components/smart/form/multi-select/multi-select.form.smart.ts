import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { MultiSelectFormComponent } from '../../../dumb/form/multi-select/multi-select.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-multi-select-form-smart',
  imports: [MultiSelectFormComponent],
  template: `<ngb-multi-select-form [label]="label()" [options]="options()" [value]="value()" [disabled]="disabled()" (changed)="onChanged($event)"><ng-content /></ngb-multi-select-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiSelectFormSmartComponent {
  readonly label = input.required<InputValue<MultiSelectFormComponent['label']>>();
  readonly options = input.required<InputValue<MultiSelectFormComponent['options']>>();
  readonly value = model<InputValue<MultiSelectFormComponent['value']>>([]);
  readonly disabled = input<InputValue<MultiSelectFormComponent['disabled']>>(false);
  readonly changed = output<OutputValue<MultiSelectFormComponent['changed']>>();

  onChanged(value: OutputValue<MultiSelectFormComponent['changed']>): void {
    this.value.set(value);
    this.changed.emit(value);
  }
}
