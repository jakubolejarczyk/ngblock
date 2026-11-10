import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { SelectFormComponent } from '../../../dumb/form/select/select.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-select-form-smart',
  imports: [SelectFormComponent],
  template: `<ngb-select-form [label]="label()" [options]="options()" [value]="value()" [disabled]="disabled()" [required]="required()" (changed)="onChanged($event)"><ng-content /></ngb-select-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectFormSmartComponent {
  readonly label = input.required<InputValue<SelectFormComponent['label']>>();
  readonly options = input.required<InputValue<SelectFormComponent['options']>>();
  readonly value = model<InputValue<SelectFormComponent['value']>>('');
  readonly disabled = input<InputValue<SelectFormComponent['disabled']>>(false);
  readonly required = input<InputValue<SelectFormComponent['required']>>(false);
  readonly changed = output<OutputValue<SelectFormComponent['changed']>>();

  onChanged(value: OutputValue<SelectFormComponent['changed']>): void {
    this.value.set(value);
    this.changed.emit(value);
  }
}
