import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { ListboxFormComponent } from '../../../dumb/form/listbox/listbox.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-listbox-form-smart',
  imports: [ListboxFormComponent],
  template: `<ngb-listbox-form [label]="label()" [options]="options()" [value]="value()" (changed)="onChanged($event)"><ng-content /></ngb-listbox-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListboxFormSmartComponent {
  readonly label = input.required<InputValue<ListboxFormComponent['label']>>();
  readonly options = input.required<InputValue<ListboxFormComponent['options']>>();
  readonly value = model<InputValue<ListboxFormComponent['value']>>('');
  readonly changed = output<OutputValue<ListboxFormComponent['changed']>>();

  onChanged(value: OutputValue<ListboxFormComponent['changed']>): void {
    this.value.set(value);
    this.changed.emit(value);
  }
}
