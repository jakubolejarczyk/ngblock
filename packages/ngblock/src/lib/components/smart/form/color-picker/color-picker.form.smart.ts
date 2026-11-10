import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { ColorPickerFormComponent } from '../../../dumb/form/color-picker/color-picker.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-color-picker-form-smart',
  imports: [ColorPickerFormComponent],
  template: `<ngb-color-picker-form [label]="label()" [value]="value()" (changed)="onChanged($event)"><ng-content /></ngb-color-picker-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerFormSmartComponent {
  readonly label = input.required<InputValue<ColorPickerFormComponent['label']>>();
  readonly value = model<InputValue<ColorPickerFormComponent['value']>>('#3b82f6');
  readonly changed = output<OutputValue<ColorPickerFormComponent['changed']>>();

  onChanged(value: OutputValue<ColorPickerFormComponent['changed']>): void {
    this.value.set(value);
    this.changed.emit(value);
  }
}
