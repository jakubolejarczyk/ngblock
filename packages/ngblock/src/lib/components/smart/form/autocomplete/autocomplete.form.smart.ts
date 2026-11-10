import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { AutocompleteFormComponent } from '../../../dumb/form/autocomplete/autocomplete.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-autocomplete-form-smart',
  imports: [AutocompleteFormComponent],
  template: `<ngb-autocomplete-form [label]="label()" [options]="options()" [value]="value()" [placeholder]="placeholder()" (changed)="onChanged($event)"><ng-content /></ngb-autocomplete-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteFormSmartComponent {
  readonly label = input.required<InputValue<AutocompleteFormComponent['label']>>();
  readonly options = input.required<InputValue<AutocompleteFormComponent['options']>>();
  readonly value = model<InputValue<AutocompleteFormComponent['value']>>('');
  readonly placeholder = input<InputValue<AutocompleteFormComponent['placeholder']>>('');
  readonly changed = output<OutputValue<AutocompleteFormComponent['changed']>>();

  onChanged(value: OutputValue<AutocompleteFormComponent['changed']>): void {
    this.value.set(value);
    this.changed.emit(value);
  }
}
