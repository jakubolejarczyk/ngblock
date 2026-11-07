import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

export interface RadioOption {
  readonly label: string;
  readonly value: string;
}

@Component({
  selector: 'ngb-radio-group-form',
  templateUrl: './radio-group.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupFormComponent {
  readonly label = input.required<string>();
  readonly name = input('ngb-radio-group');
  readonly options = input.required<readonly RadioOption[]>();
  readonly value = input('');
  readonly disabled = input(false);
  readonly changed = output<string>();
}
