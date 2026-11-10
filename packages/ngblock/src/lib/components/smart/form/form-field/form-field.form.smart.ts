import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormFieldFormComponent } from '../../../dumb/form/form-field/form-field.form';
import type { InputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-form-field-form-smart',
  imports: [FormFieldFormComponent],
  template: `<ngb-form-field-form [label]="label()" [controlId]="controlId()" [hint]="hint()" [error]="error()" [required]="required()"><ng-content select="[ngbFieldControl]" /></ngb-form-field-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldFormSmartComponent {
  readonly label = input.required<InputValue<FormFieldFormComponent['label']>>();
  readonly controlId =
    input.required<InputValue<FormFieldFormComponent['controlId']>>();
  readonly hint = input<InputValue<FormFieldFormComponent['hint']>>('');
  readonly error = input<InputValue<FormFieldFormComponent['error']>>('');
  readonly required = input<InputValue<FormFieldFormComponent['required']>>(
    false,
  );
}
