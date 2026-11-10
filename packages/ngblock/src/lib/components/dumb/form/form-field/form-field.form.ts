import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-form-field-form',
  templateUrl: './form-field.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldFormComponent {
  readonly label = input.required<string>();
  readonly controlId = input.required<string>();
  readonly hint = input('');
  readonly error = input('');
  readonly required = input(false);
}
