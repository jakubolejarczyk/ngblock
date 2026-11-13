import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
  output,
} from '@angular/core';
import { SelectButtonFormComponent } from '../../../dumb/form/select-button/select-button.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-select-button-form-smart',
  imports: [SelectButtonFormComponent],
  template: `<ngb-select-button-form
    [label]="label()"
    [options]="options()"
    [value]="value()"
    [disabled]="disabled()"
    (changed)="onChanged($event)"
  />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectButtonFormSmartComponent {
  readonly label =
    input.required<InputValue<SelectButtonFormComponent['label']>>();
  readonly options =
    input.required<InputValue<SelectButtonFormComponent['options']>>();
  readonly value = model<InputValue<SelectButtonFormComponent['value']>>('');
  readonly disabled =
    input<InputValue<SelectButtonFormComponent['disabled']>>(false);
  readonly changed =
    output<OutputValue<SelectButtonFormComponent['changed']>>();

  onChanged(value: OutputValue<SelectButtonFormComponent['changed']>): void {
    this.value.set(value);
    this.changed.emit(value);
  }
}
