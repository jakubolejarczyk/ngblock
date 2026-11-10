import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { RadioGroupFormComponent } from '../../../dumb/form/radio-group/radio-group.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-radio-group-form-smart',
  imports: [RadioGroupFormComponent],
  template: `<ngb-radio-group-form [label]="label()" [name]="name()" [options]="options()" [value]="value()" [disabled]="disabled()" (changed)="onChanged($event)"><ng-content /></ngb-radio-group-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupFormSmartComponent {
  readonly label = input.required<InputValue<RadioGroupFormComponent['label']>>();
  readonly name = input<InputValue<RadioGroupFormComponent['name']>>('ngb-radio-group');
  readonly options = input.required<InputValue<RadioGroupFormComponent['options']>>();
  readonly value = model<InputValue<RadioGroupFormComponent['value']>>('');
  readonly disabled = input<InputValue<RadioGroupFormComponent['disabled']>>(false);
  readonly changed = output<OutputValue<RadioGroupFormComponent['changed']>>();

  onChanged(value: OutputValue<RadioGroupFormComponent['changed']>): void {
    this.value.set(value);
    this.changed.emit(value);
  }
}
