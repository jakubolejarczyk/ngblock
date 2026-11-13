import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
  output,
} from '@angular/core';
import { TagsFormComponent } from '../../../dumb/form/tags/tags.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-tags-form-smart',
  imports: [TagsFormComponent],
  template: `<ngb-tags-form
    [label]="label()"
    [value]="value()"
    [placeholder]="placeholder()"
    [disabled]="disabled()"
    (changed)="onChanged($event)"
  />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsFormSmartComponent {
  readonly label = input.required<InputValue<TagsFormComponent['label']>>();
  readonly value = model<InputValue<TagsFormComponent['value']>>([]);
  readonly placeholder =
    input<InputValue<TagsFormComponent['placeholder']>>('Add a value');
  readonly disabled = input<InputValue<TagsFormComponent['disabled']>>(false);
  readonly changed = output<OutputValue<TagsFormComponent['changed']>>();

  onChanged(value: OutputValue<TagsFormComponent['changed']>): void {
    this.value.set(value);
    this.changed.emit(value);
  }
}
