import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { TextFieldFormComponent } from '../../../dumb/form/text-field/text-field.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-text-field-form-smart',
  imports: [TextFieldFormComponent],
  template: `<ngb-text-field-form [label]="label()" [value]="value()" [type]="type()" [placeholder]="placeholder()" [disabled]="disabled()" [required]="required()" (changed)="onChanged($event)"><ng-content /></ngb-text-field-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldFormSmartComponent {
  readonly label = input.required<InputValue<TextFieldFormComponent['label']>>();
  readonly value = model<InputValue<TextFieldFormComponent['value']>>('');
  readonly type = input<InputValue<TextFieldFormComponent['type']>>('text');
  readonly placeholder = input<InputValue<TextFieldFormComponent['placeholder']>>('');
  readonly disabled = input<InputValue<TextFieldFormComponent['disabled']>>(false);
  readonly required = input<InputValue<TextFieldFormComponent['required']>>(false);
  readonly changed = output<OutputValue<TextFieldFormComponent['changed']>>();

  onChanged(value: OutputValue<TextFieldFormComponent['changed']>): void {
    this.value.set(value);
    this.changed.emit(value);
  }
}
