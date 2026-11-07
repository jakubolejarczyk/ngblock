import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
} from '@angular/core';

export interface SplitButtonOption {
  readonly label: string;
  readonly value: string;
}

@Component({
  selector: 'ngb-split-button-control',
  templateUrl: './split-button.control.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitButtonComponent {
  readonly label = input.required<string>();
  readonly options = input.required<readonly SplitButtonOption[]>();
  readonly action = output<string>();
  readonly open = signal(false);

  choose(value: string): void {
    this.action.emit(value);
    this.open.set(false);
  }
}
