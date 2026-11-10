import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { TextareaFormComponent } from '../../../dumb/form/textarea/textarea.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-textarea-form-smart',
  imports: [TextareaFormComponent],
  template: `<ngb-textarea-form [label]="label()" [value]="value()" [rows]="rows()" [placeholder]="placeholder()" [disabled]="disabled()" [required]="required()" (changed)="onChanged($event)"><ng-content /></ngb-textarea-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaFormSmartComponent {
  readonly label = input.required<InputValue<TextareaFormComponent['label']>>();
  readonly value = model<InputValue<TextareaFormComponent['value']>>('');
  readonly rows = input<InputValue<TextareaFormComponent['rows']>>(4);
  readonly placeholder = input<InputValue<TextareaFormComponent['placeholder']>>('');
  readonly disabled = input<InputValue<TextareaFormComponent['disabled']>>(false);
  readonly required = input<InputValue<TextareaFormComponent['required']>>(false);
  readonly changed = output<OutputValue<TextareaFormComponent['changed']>>();

  onChanged(value: OutputValue<TextareaFormComponent['changed']>): void {
    this.value.set(value);
    this.changed.emit(value);
  }
}
