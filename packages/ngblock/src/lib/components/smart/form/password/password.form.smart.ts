import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { PasswordFormComponent } from '../../../dumb/form/password/password.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-password-form-smart',
  imports: [PasswordFormComponent],
  template: `<ngb-password-form [label]="label()" [value]="value()" [placeholder]="placeholder()" [disabled]="disabled()" (changed)="onChanged($event)"><ng-content /></ngb-password-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordFormSmartComponent {
  readonly label = input.required<InputValue<PasswordFormComponent['label']>>();
  readonly value = model<InputValue<PasswordFormComponent['value']>>('');
  readonly placeholder = input<InputValue<PasswordFormComponent['placeholder']>>('');
  readonly disabled = input<InputValue<PasswordFormComponent['disabled']>>(false);
  readonly changed = output<OutputValue<PasswordFormComponent['changed']>>();

  onChanged(value: OutputValue<PasswordFormComponent['changed']>): void {
    this.value.set(value);
    this.changed.emit(value);
  }
}
