import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

export interface SelectButtonOption {
  readonly label: string;
  readonly value: string;
}

@Component({
  selector: 'ngb-select-button-form',
  templateUrl: './select-button.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectButtonFormComponent {
  readonly label = input.required<string>();
  readonly options = input.required<readonly SelectButtonOption[]>();
  readonly value = input('');
  readonly disabled = input(false);
  readonly changed = output<string>();
}
